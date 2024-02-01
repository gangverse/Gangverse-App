import { ChainId } from '@linbingdefi/sdk'
import addresses from 'config/constants/contracts'
import { Address } from 'config/constants/types'
import { VaultKey } from 'state/types'

export const getAddress = (address: Address): string => {
  const chainId = process.env.NEXT_PUBLIC_CHAIN_ID
  return address[chainId] ? address[chainId] : address[ChainId.MAINNET]
}

export const getMasterChefAddress = () => {
  return getAddress(addresses.masterChef)
}
// Only Pool Version Masterchef
export const getLinbingPoolAddress = () => {
  return getAddress(addresses.linbingPool)
}
// Only Farm Version Masterchef
export const getLinbingFarmAddress = () => {
  return getAddress(addresses.linbingFarm)
}
// Nft Farm Version Masterchef
export const getLinbingNftStakeAddress = () => {
  return getAddress(addresses.linbingNftStake)
}
export const getLinbingClaimRewardAddress = () => {
  return getAddress(addresses.linbingClaimReward)
}
export const getLinbingClaimRewardV2Address = () => {
  return getAddress(addresses.linbingClaimRewardV2)
}
export const getMulticallAddress = () => {
  return getAddress(addresses.multiCall)
}
export const getMulticallCronosAddress = () => {
  return getAddress(addresses.multiCallCronos)
}
export const getLotteryV2Address = () => {
  return getAddress(addresses.lotteryV2)
}
export const getPancakeProfileAddress = () => {
  return getAddress(addresses.pancakeProfile)
}
export const getPancakeRabbitsAddress = () => {
  return getAddress(addresses.pancakeRabbits)
}
export const getBunnyFactoryAddress = () => {
  return getAddress(addresses.bunnyFactory)
}
export const getClaimRefundAddress = () => {
  return getAddress(addresses.claimRefund)
}
export const getPointCenterIfoAddress = () => {
  return getAddress(addresses.pointCenterIfo)
}
export const getBunnySpecialAddress = () => {
  return getAddress(addresses.bunnySpecial)
}
export const getTradingCompetitionAddress = () => {
  return getAddress(addresses.tradingCompetition)
}
export const getTradingCompetitionAddressV2 = () => {
  return getAddress(addresses.tradingCompetitionV2)
}
export const getEasterNftAddress = () => {
  return getAddress(addresses.easterNft)
}
export const getLinbingNftAddress = () => {
  return getAddress(addresses.linbingNft)
}

export const getCronosCatsNFTNftAddress = () => {
  return getAddress(addresses.CronosCatsNFT)
}

export const getGangverseDarksideNftAddress = () => {
  return getAddress(addresses.GangverseDarksideNFT)
}




export const getVaultPoolAddress = (vaultKey: VaultKey) => {
  if (!vaultKey) {
    return null
  }
  // CAUTION: This line below added by Linbing
  const address = vaultKey == "cakeVault" ? addresses.linbingAutoPoolVault : addresses[vaultKey]
  return getAddress(address)
}

export const getCakeVaultAddress = () => {
  return getAddress(addresses.cakeVault)
}
export const getLinbingAutoPoolVaultAddress = () => {
  return getAddress(addresses.linbingAutoPoolVault)
}
export const getIfoPoolAddress = () => {
  return getAddress(addresses.ifoPool)
}
export const getPredictionsAddress = () => {
  return getAddress(addresses.predictions)
}
export const getChainlinkOracleAddress = () => {
  return getAddress(addresses.chainlinkOracle)
}
export const getBunnySpecialCakeVaultAddress = () => {
  return getAddress(addresses.bunnySpecialCakeVault)
}
export const getBunnySpecialPredictionAddress = () => {
  return getAddress(addresses.bunnySpecialPrediction)
}
export const getBunnySpecialLotteryAddress = () => {
  return getAddress(addresses.bunnySpecialLottery)
}
export const getBunnySpecialXmasAddress = () => {
  return getAddress(addresses.bunnySpecialXmas)
}
export const getFarmAuctionAddress = () => {
  return getAddress(addresses.farmAuction)
}
export const getAnniversaryAchievement = () => {
  return getAddress(addresses.AnniversaryAchievement)
}
export const getNftMarketAddress = () => {
  return getAddress(addresses.nftMarket)
}
export const getNftSaleAddress = () => {
  return getAddress(addresses.nftSale)
}
export const getPancakeSquadAddress = () => {
  return getAddress(addresses.pancakeSquad)
}
