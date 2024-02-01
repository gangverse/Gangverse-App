import { SerializedNftFarmGangverseConfig } from 'config/constants/types'
import BigNumber from 'bignumber.js'
import { BigNumber as EthersBigNumber } from '@ethersproject/bignumber'
import { BIG_TEN, BIG_ZERO } from '../../utils/bigNumber'
import { fetchPublicFarmsData } from './fetchPublicFarmData'
import { fetchMasterChefData } from './fetchMasterChefData'
import farmsConfig from 'config/constants/nftFarmsGangverse'
import { getAddress } from 'utils/addressHelpers'
import { multicallCronosv1, multicallCronosv2 } from 'utils/multicall'
import sousChefABI from 'config/abi/sousChef.json'
import sousChefV2 from '../../config/abi/sousChefV2.json'
import chunk from 'lodash/chunk'

const smartNftStakeFarms = farmsConfig.filter((f) => f.contractAddresses)
const startEndBlockCalls = smartNftStakeFarms.flatMap((nftFarmGangverseConfig) => {
  return [
    {
      address: getAddress(nftFarmGangverseConfig.contractAddresses),
      name: 'startBlock',
    },
    {
      address: getAddress(nftFarmGangverseConfig.contractAddresses),
      name: 'bonusEndBlock',
    },
  ]
})

export const fetchNftFarmsGangverseBlockLimits = async () => {
  const startEndBlockRaw = await multicallCronosv1(sousChefABI, startEndBlockCalls)

  const startEndBlockResult = startEndBlockRaw.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / 2)

    if (!resultArray[chunkIndex]) {
      // eslint-disable-next-line no-param-reassign
      resultArray[chunkIndex] = [] // start a new chunk
    }

    resultArray[chunkIndex].push(item)

    return resultArray
  }, [])

  return smartNftStakeFarms.map((nftFarmGangverseConfig, index) => {
    const [[startBlock], [endBlock]] = startEndBlockResult[index]
    return {
      pid: nftFarmGangverseConfig.pid,
      startBlock: startBlock.toNumber(),
      endBlock: endBlock.toNumber(),
    }
  })
}

export const fetchNftPoolsStakingLimits = async (
  poolsWithStakingLimit: number[],
): Promise<{ [key: string]: { stakingLimit: BigNumber; numberBlocksForUserLimit: number } }> => {
  const validPools = smartNftStakeFarms
    .filter((p) => !p.isFinished)
    .filter((p) => !poolsWithStakingLimit.includes(p.pid))

  // Get the staking limit for each valid pool
  const poolStakingCalls = validPools
    .map((validPool) => {
      const contractAddress = getAddress(validPool.contractAddresses)
      return ['hasUserLimit', 'poolLimitPerUser', 'numberBlocksForUserLimit'].map((method) => ({
        address: contractAddress,
        name: method,
      }))
    })
    .flat()

  const poolStakingResultRaw = await multicallCronosv2(sousChefV2, poolStakingCalls, { requireSuccess: false })
  const chunkSize = poolStakingCalls.length / validPools.length
  const poolStakingChunkedResultRaw = chunk(poolStakingResultRaw.flat(), chunkSize)
  return poolStakingChunkedResultRaw.reduce((accum, stakingLimitRaw, index) => {
    const hasUserLimit = stakingLimitRaw[0]
    const stakingLimit = hasUserLimit && stakingLimitRaw[1] ? new BigNumber(stakingLimitRaw[1].toString()) : BIG_ZERO
    const numberBlocksForUserLimit = stakingLimitRaw[2] ? (stakingLimitRaw[2] as EthersBigNumber).toNumber() : 0
    return {
      ...accum,
      [validPools[index].pid]: { stakingLimit, numberBlocksForUserLimit },
    }
  }, {})
}

const fetchFarms = async (farmsToFetch: SerializedNftFarmGangverseConfig[], currentBlock: number) => {
  

  const blockLimits = await fetchNftFarmsGangverseBlockLimits()
  
  // Information about LP Token Contract(Pair)
  const farmResult = await fetchPublicFarmsData(farmsToFetch)

  // Only farms in nftStakeContract(not smartchef)
  const linbingFarms = farmsToFetch.filter((f) => !f.contractAddresses)
  const smartNftStakePools = farmsToFetch.filter((f) => f.contractAddresses)
  
  // Information about Farming Pools on Masterchef
  const oldNftStakePoolResult = await fetchMasterChefData(linbingFarms, false)
  
  const smartNftStakePoolResult = await fetchMasterChefData(smartNftStakePools, true)
  

  return farmsToFetch.map((farm, index) => {
    const blockLimit = blockLimits.find((entry) => entry.pid === farm.pid)
    const isPoolEndBlockExceeded = currentBlock > 0 && blockLimit ? currentBlock > Number(blockLimit.endBlock) : false
    const isPoolFinished = farm.isFinished || isPoolEndBlockExceeded

    // LP Token Contract(Pair) datas
    const [lpTokenBalanceMC] = farmResult[index]
      
    // Farming Pools on Masterchef
    const [info, totalAllocPoint] = linbingFarms.includes(farm) ? oldNftStakePoolResult[index] : [null,null]
    const allocPoint = info ? new BigNumber(info.allocPoint?._hex) : BIG_ZERO
    const poolWeight = totalAllocPoint ? allocPoint.div(new BigNumber(totalAllocPoint)) : BIG_ZERO
    const totalShares = farm.contractAddresses ? smartNftStakePoolResult[index - linbingFarms.length] : BIG_ZERO

    return {
      ...farm,
      ...blockLimit,
      totalStaked: new BigNumber(lpTokenBalanceMC).toJSON(),
      poolWeight: poolWeight.toJSON(),
      multiplier: `${allocPoint.div(100).toString()}X`,
      isFinished: isPoolFinished,
      totalShares: new BigNumber(totalShares).toJSON(),
    }
  })
}

export default fetchFarms
