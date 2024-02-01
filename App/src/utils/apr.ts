import BigNumber from 'bignumber.js'
import { BLOCKS_PER_YEAR, LINBING_PER_YEAR_FARM, LINBING_PER_YEAR_NFTFARM } from 'config'
import lpAprs from 'config/constants/lpAprs.json'
import { getBalanceNumber } from './formatBalance'

/**
 * Get the APR value in %
 * @param stakingTokenPrice Token price in the same quote currency
 * @param rewardTokenPrice Token price in the same quote currency
 * @param totalStaked Total amount of stakingToken in the pool
 * @param tokenPerBlock Amount of new cake allocated to the pool for each new block
 * @returns Null if the APR is NaN or infinite.
 */
export const getPoolApr = (
  stakingTokenPrice: number,
  rewardTokenPrice: number,
  totalStaked: number,
  tokenPerBlock: number,
): number => {
  const totalRewardPricePerYear = new BigNumber(rewardTokenPrice).times(tokenPerBlock).times(BLOCKS_PER_YEAR)
  const totalStakingTokenInPool = new BigNumber(stakingTokenPrice).times(totalStaked)
  const apr = totalRewardPricePerYear.div(totalStakingTokenInPool).times(100)
  return apr.isNaN() || !apr.isFinite() ? null : apr.toNumber()
}

/**
 * Get farm APR value in %
 * @param poolWeight allocationPoint / totalAllocationPoint
 * @param cakePriceUsd Cake price in USD
 * @param poolLiquidityUsd Total pool liquidity in USD
 * @param farmAddress Farm Address
 * @returns Farm Apr
 */
export const getFarmApr = (
  poolWeight: BigNumber,
  cakePriceUsd: BigNumber,
  poolLiquidityUsd: BigNumber,
  farmAddress: string,
): { cakeRewardsApr: number; lpRewardsApr: number } => {
  const yearlyCakeRewardAllocation = poolWeight ? poolWeight.times(LINBING_PER_YEAR_FARM) : new BigNumber(NaN)
  const cakeRewardsApr = yearlyCakeRewardAllocation.times(cakePriceUsd).div(poolLiquidityUsd).times(100)
  let cakeRewardsAprAsNumber = null
  if (!cakeRewardsApr.isNaN() && cakeRewardsApr.isFinite()) {
    cakeRewardsAprAsNumber = cakeRewardsApr.toNumber()
  }
  const lpRewardsApr = lpAprs[farmAddress?.toLocaleLowerCase()] ?? 0
  return { cakeRewardsApr: cakeRewardsAprAsNumber, lpRewardsApr }
}

/**
 * Get nft farm APR value in %
 * @param poolWeight allocationPoint / totalAllocationPoint
 * @param cakePriceUsd Cake price in USD
 * @param poolLiquidityUsd Total pool liquidity in USD
 * @param farmAddress Farm Address
 * @returns Farm Apr
 */
 export const getNftFarmApr = (
  poolWeight: BigNumber,
  tokenPerBlock: number,
  totalLiquidity: BigNumber,
  mainCollectionWeight?: number,
): { cakeRewardsApr: number; lpRewardsApr: number } => {
  
  
  const liquidity = totalLiquidity.toNumber()
  const isSmartNftStake = tokenPerBlock

  
  const yearlyCakeRewardAllocation = poolWeight ? poolWeight.times(LINBING_PER_YEAR_NFTFARM) : new BigNumber(NaN)
  const cakeRewardsApr = yearlyCakeRewardAllocation.div(liquidity)

  const yearlyCakeRewardAllocationForSmartNft = isSmartNftStake ? tokenPerBlock * BLOCKS_PER_YEAR : null

  const cakeRewardsAprSmartNft = (yearlyCakeRewardAllocationForSmartNft / liquidity) * mainCollectionWeight

  let cakeRewardsAprAsNumber = null
  if (!cakeRewardsApr.isNaN() && cakeRewardsApr.isFinite()) {
    cakeRewardsAprAsNumber = cakeRewardsApr.toNumber()
  }

  if (isSmartNftStake) {
    cakeRewardsAprAsNumber = cakeRewardsAprSmartNft
  }

  return { cakeRewardsApr: cakeRewardsAprAsNumber / 365, lpRewardsApr: 0 }
}

export const getNftFarmGangverseApr = (
  poolWeight: BigNumber,
  tokenPerBlock: number,
  totalLiquidity: BigNumber,
  mainCollectionWeight?: number,
): { cakeRewardsApr: number; lpRewardsApr: number } => {
  
  
  const liquidity = totalLiquidity.toNumber()
  const isSmartNftStake = tokenPerBlock

  
  const yearlyCakeRewardAllocation = poolWeight ? poolWeight.times(LINBING_PER_YEAR_NFTFARM) : new BigNumber(NaN)
  const cakeRewardsApr = yearlyCakeRewardAllocation.div(liquidity)

  const yearlyCakeRewardAllocationForSmartNft = isSmartNftStake ? tokenPerBlock * BLOCKS_PER_YEAR : null

  const cakeRewardsAprSmartNft = (yearlyCakeRewardAllocationForSmartNft / liquidity) * mainCollectionWeight

  let cakeRewardsAprAsNumber = null
  if (!cakeRewardsApr.isNaN() && cakeRewardsApr.isFinite()) {
    cakeRewardsAprAsNumber = cakeRewardsApr.toNumber()
  }

  if (isSmartNftStake) {
    cakeRewardsAprAsNumber = cakeRewardsAprSmartNft
  }

  return { cakeRewardsApr: cakeRewardsAprAsNumber / 365, lpRewardsApr: 0 }
}

export default null
