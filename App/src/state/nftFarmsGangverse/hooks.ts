import { useWeb3React } from '@web3-react/core'
import BigNumber from 'bignumber.js'
import { nftFarmsGangverseConfig } from 'config/constants'
import { useFastRefreshEffect, useSlowRefreshEffect } from 'hooks/useRefreshEffect'
import { useMemo } from 'react'
import { batch, useSelector } from 'react-redux'
import { useAppDispatch } from 'state'
import { deserializeToken } from 'state/user/hooks/helpers'
import { BIG_ZERO } from 'utils/bigNumber'
import { getBalanceAmount } from 'utils/formatBalance'
import { fetchFarmsPublicDataAsync, fetchFarmUserDataAsync, fetchNftPoolsStakingLimitsAsync, nonArchivedFarms } from '.'
import { DeserializedNftFarmGangverse, DeserializedNftFarmsState, DeserializedNftFarmGangverseUserData, SerializedNftFarmGangverse, State, DeserializedNftFarmsGangverseState } from '../typesgangverse'

const deserializeNftFarmGangverseUserData = (farm: SerializedNftFarmGangverse): DeserializedNftFarmGangverseUserData => {
  return {
    allowance: farm.userData ? farm.userData.allowance : [],
    tokenBalance: farm.userData ? new BigNumber(farm.userData.tokenBalance) : BIG_ZERO,
    stakedBalance: farm.userData ? new BigNumber(farm.userData.stakedBalance) : BIG_ZERO,
    earnings: farm.userData ? new BigNumber(farm.userData.earnings) : BIG_ZERO,
  }
}

const deserializeNftFarmGangverse = (farm: SerializedNftFarmGangverse): DeserializedNftFarmGangverse => {
  const { nftAddresses, contractAddresses, lpSymbol, pid, dual, multiplier, tokenPerBlock, startBlock, endBlock, participantThreshold, isFinished, numberBlocksForUserLimit, stakingLimit, earningToken, performanceFee } = farm
  return {
    nftAddresses,
    contractAddresses,
    lpSymbol,
    pid,
    dual,
    multiplier,
    tokenPerBlock,
    startBlock,
    endBlock,
    participantThreshold,
    isFinished,
    stakingLimitEndBlock: numberBlocksForUserLimit + startBlock,
    stakingLimit: new BigNumber(stakingLimit),
    earningToken: earningToken ? deserializeToken(earningToken) : null,
    sideRewards: farm.sideRewards,
    performanceFee,
    userData: deserializeNftFarmGangverseUserData(farm),
    tokenAmountTotal: farm.tokenAmountTotal ? new BigNumber(farm.tokenAmountTotal) : BIG_ZERO,
    lpTotalInQuoteToken: farm.lpTotalInQuoteToken ? new BigNumber(farm.lpTotalInQuoteToken) : BIG_ZERO,
    lpTotalSupply: BIG_ZERO,
    totalStaked: farm.totalStaked ? new BigNumber(farm.totalStaked) : BIG_ZERO,
    poolWeight: farm.poolWeight ? new BigNumber(farm.poolWeight) : BIG_ZERO,
    totalShares: farm.totalShares ? new BigNumber(farm.totalShares) : BIG_ZERO,
    supportedCollectionPids: farm.supportedCollectionPids ? farm.supportedCollectionPids : []
  }
}

export const usePollFarmsWithUserData = (includeArchive = false) => {
  const dispatch = useAppDispatch()
  const { account } = useWeb3React()

  useSlowRefreshEffect((currentBlock) => {
    const farmsToFetch = includeArchive ? nftFarmsGangverseConfig : nonArchivedFarms
    const pids = farmsToFetch.map((farmToFetch) => farmToFetch.pid)

    batch(() => {
      dispatch(fetchFarmsPublicDataAsync({pids, currentBlock}))
      dispatch(fetchNftPoolsStakingLimitsAsync())
    })

    if (account) {
      dispatch(fetchFarmUserDataAsync({ account, pids }))
    }
  }, [includeArchive, dispatch, account])
}

/**
 * Fetches the "core" farm data used globally
 * 251 = CAKE-BNB LP
 * 252 = BUSD-BNB LP
 */
export const usePollCoreFarmData = () => {
  const dispatch = useAppDispatch()

  useFastRefreshEffect((currentBlock) => {
    dispatch(fetchFarmsPublicDataAsync({ pids: [1, 2], currentBlock }))
  }, [dispatch])
}

export const useFarms = (): DeserializedNftFarmsGangverseState => {
  const farms = useSelector((state: State) => state.nftFarmsGangverse)
  const deserializedFarmsData = farms.data.map(deserializeNftFarmGangverse)
  const { loadArchivedFarmsData, userDataLoaded, poolLength } = farms
  return {
    loadArchivedFarmsData,
    userDataLoaded,
    data: deserializedFarmsData,
    poolLength,
  }
}

export const useFarmsPoolLength = (): number => {
  return useSelector((state: State) => state.nftFarmsGangverse.poolLength)
}

export const useFarmFromPid = (pid: number): DeserializedNftFarmGangverse => {
  const farm = useSelector((state: State) => state.nftFarmsGangverse.data.find((f) => f.pid === pid))
  return deserializeNftFarmGangverse(farm)
}

export const useFarmFromLpSymbol = (lpSymbol: string): DeserializedNftFarmGangverse => {
  const farm = useSelector((state: State) => state.nftFarmsGangverse.data.find((f) => f.lpSymbol === lpSymbol))
  return deserializeNftFarmGangverse(farm)
}

export const useFarmUser = (pid): DeserializedNftFarmGangverseUserData => {
  const { userData } = useFarmFromPid(pid)
  const { allowance, tokenBalance, stakedBalance, earnings } = userData
  return {
    allowance,
    tokenBalance,
    stakedBalance,
    earnings,
  }
}

// Return the base token price for a farm, from a given pid
export const useBusdPriceFromPid = (pid: number): BigNumber => {
  const farm = useFarmFromPid(pid)
  return farm && new BigNumber(farm.tokenPriceBusd)
}

export const useLpTokenPrice = (symbol: string) => {
  const farm = useFarmFromLpSymbol(symbol)
  const farmTokenPriceInUsd = useBusdPriceFromPid(farm.pid)
  let lpTokenPrice = BIG_ZERO

  if (farm.lpTotalSupply.gt(0) && farm.lpTotalInQuoteToken.gt(0)) {
    // Total value of base token in LP
    const valueOfBaseTokenInFarm = farmTokenPriceInUsd.times(farm.tokenAmountTotal)
    // Double it to get overall value in LP
    const overallValueOfAllTokensInFarm = valueOfBaseTokenInFarm.times(2)
    // Divide total value of all tokens, by the number of LP tokens
    const totalLpTokens = getBalanceAmount(farm.lpTotalSupply)
    lpTokenPrice = overallValueOfAllTokensInFarm.div(totalLpTokens)
  }

  return lpTokenPrice
}

/**
 * @@deprecated use the BUSD hook in /hooks
 */
export const usePriceCakeBusd = (): BigNumber => {
  const cakeBnbFarm = useFarmFromPid(1)

  const cakePriceBusdAsString = cakeBnbFarm.tokenPriceBusd

  const cakePriceBusd = useMemo(() => {
    return new BigNumber(cakePriceBusdAsString)
  }, [cakePriceBusdAsString])

  return cakePriceBusd
}
