import masterchefABI from 'config/abi/masterchef.json'
import linbingNftStakeABI from 'config/abi/linbingNftStake.json'
import chunk from 'lodash/chunk'
import { multicallCronosv2 } from 'utils/multicall'
import { SerializedNftFarmConfig } from '../../config/constants/types'
import { SerializedNftFarm } from '../types'
import { getAddress, getLinbingNftStakeAddress } from '../../utils/addressHelpers'
import { getLinbingNftStakeContract } from '../../utils/contractHelpers'
import smartNftStakeABI from '../../config/abi/smartNftStake.json'

const masterChefAddress = getLinbingNftStakeAddress() //getMasterChefAddress()
const masterChefContract = getLinbingNftStakeContract() //getMasterchefContract

export const fetchMasterChefFarmPoolLength = async () => {
  const poolLength = await masterChefContract.poolLength()
  return poolLength
}

const masterChefFarmCalls = (farm: SerializedNftFarm) => {
  const { pid } = farm
  return pid || pid === 0
    ? [
        {
          address: masterChefAddress,
          name: 'poolInfo',
          params: [pid],
        },
        {
          address: masterChefAddress,
          name: 'totalAllocPoint',
        },
      ]
    : [null, null]
}

const smartNftPoolCalls = (farm: SerializedNftFarm) => {
  const { contractAddresses } = farm
  return contractAddresses
    ? [
        {
          address: getAddress(contractAddresses),
          name: 'totalShares',
        },
      ]
    : [null]
}

export const fetchMasterChefData = async (farms: SerializedNftFarmConfig[], isSmartNftPool: boolean): Promise<any[]> => {
  const masterChefCalls = farms.map((farm) => isSmartNftPool ? smartNftPoolCalls(farm) : masterChefFarmCalls(farm))
  const chunkSize = masterChefCalls.flat().length / farms.length
  const masterChefAggregatedCalls = masterChefCalls
    .filter((masterChefCall) => masterChefCall[0] !== null && masterChefCall[1] !== null)
    .flat()

  const masterChefMultiCallResult = await multicallCronosv2(isSmartNftPool ? smartNftStakeABI : linbingNftStakeABI, masterChefAggregatedCalls)
  
  const masterChefChunkedResultRaw = chunk(masterChefMultiCallResult, chunkSize)
  let masterChefChunkedResultCounter = 0
  return masterChefCalls.map((masterChefCall) => {
    if (masterChefCall[0] === null && masterChefCall[1] === null) {
      return [null, null]
    }
    const data = masterChefChunkedResultRaw[masterChefChunkedResultCounter]
    masterChefChunkedResultCounter++
    return data
  })
}
