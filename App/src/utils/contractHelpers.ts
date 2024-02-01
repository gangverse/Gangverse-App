// @ts-nocheck
import type { Signer } from '@ethersproject/abstract-signer'
import type { Provider } from '@ethersproject/providers'
import { Contract } from '@ethersproject/contracts'
import { simpleCronosRpcProvider, simpleRpcProvider } from 'utils/providers'
import poolsConfig from 'config/constants/pools'
import { PoolCategory } from 'config/constants/types'
import tokens from 'config/constants/tokens'

// Addresses
import {
  getAddress,
  getPancakeProfileAddress,
  getPancakeRabbitsAddress,
  getBunnyFactoryAddress,
  getBunnySpecialAddress,
  getLotteryV2Address,
  getMasterChefAddress,
  getPointCenterIfoAddress,
  getClaimRefundAddress,
  getTradingCompetitionAddress,
  getEasterNftAddress,
  getCakeVaultAddress,
  getIfoPoolAddress,
  getPredictionsAddress,
  getChainlinkOracleAddress,
  getMulticallAddress,
  getBunnySpecialCakeVaultAddress,
  getBunnySpecialPredictionAddress,
  getBunnySpecialLotteryAddress,
  getFarmAuctionAddress,
  getAnniversaryAchievement,
  getNftMarketAddress,
  getNftSaleAddress,
  getPancakeSquadAddress,
  getTradingCompetitionAddressV2,
  getBunnySpecialXmasAddress,
  getMulticallCronosAddress,
  getLinbingNftAddress,
  getGangverseDarksideNftAddress,
  getLinbingPoolAddress,
  getLinbingAutoPoolVaultAddress,
  getLinbingFarmAddress,
  getLinbingNftStakeAddress,
  getLinbingClaimRewardAddress,
  getLinbingClaimRewardV2Address,
} from 'utils/addressHelpers'

// ABI
import profileABI from 'config/abi/pancakeProfile.json'
import pancakeRabbitsAbi from 'config/abi/pancakeRabbits.json'
import bunnyFactoryAbi from 'config/abi/bunnyFactory.json'
import bunnySpecialAbi from 'config/abi/bunnySpecial.json'
import bep20Abi from 'config/abi/erc20.json'
import erc721Abi from 'config/abi/erc721.json'
import lpTokenAbi from 'config/abi/lpToken.json'
import cakeAbi from 'config/abi/cake.json'
import ifoV1Abi from 'config/abi/ifoV1.json'
import ifoV2Abi from 'config/abi/ifoV2.json'
import linbingNftAbi from 'config/abi/linbingNft.json'
import GangverseDarksideNftAbi from 'config/abi/GangverseDarksideNFT.json'
import pointCenterIfo from 'config/abi/pointCenterIfo.json'
import lotteryV2Abi from 'config/abi/lotteryV2.json'
import masterChef from 'config/abi/masterchef.json'
import linbingPool from 'config/abi/linbingPool.json'
import linbingFarm from 'config/abi/linbingFarm.json'
import linbingNftStake from 'config/abi/linbingNftStake.json'
import smartNftStake from 'config/abi/smartNftStake.json'
import linbingClaimReward from 'config/abi/linbingClaimReward.json'
import sousChef from 'config/abi/sousChef.json'
import sousChefV2 from 'config/abi/sousChefV2.json'
import sousChefBnb from 'config/abi/sousChefBnb.json'
import claimRefundAbi from 'config/abi/claimRefund.json'
import tradingCompetitionAbi from 'config/abi/tradingCompetition.json'
import tradingCompetitionV2Abi from 'config/abi/tradingCompetitionV2.json'
import easterNftAbi from 'config/abi/easterNft.json'
import cakeVaultAbi from 'config/abi/cakeVault.json'
import linbingAutoPoolVaultAbi from 'config/abi/linbingAutoPoolVault.json'
import ifoPoolAbi from 'config/abi/ifoPool.json'
import predictionsAbi from 'config/abi/predictions.json'
import chainlinkOracleAbi from 'config/abi/chainlinkOracle.json'
import MultiCallAbi from 'config/abi/Multicall.json'
import bunnySpecialCakeVaultAbi from 'config/abi/bunnySpecialCakeVault.json'
import bunnySpecialPredictionAbi from 'config/abi/bunnySpecialPrediction.json'
import bunnySpecialLotteryAbi from 'config/abi/bunnySpecialLottery.json'
import bunnySpecialXmasAbi from 'config/abi/bunnySpecialXmas.json'
import farmAuctionAbi from 'config/abi/farmAuction.json'
import anniversaryAchievementAbi from 'config/abi/anniversaryAchievement.json'
import nftMarketAbi from 'config/abi/nftMarket.json'
import nftSaleAbi from 'config/abi/nftSale.json'
import pancakeSquadAbi from 'config/abi/pancakeSquad.json'
import erc721CollectionAbi from 'config/abi/erc721collection.json'

// Types
import type {
  ChainlinkOracle,
  FarmAuction,
  Predictions,
  AnniversaryAchievement,
  IfoV1,
  IfoV2,
  IfoPool,
  Erc20,
  Erc721,
  Cake,
  BunnyFactory,
  PancakeRabbits,
  PancakeProfile,
  LotteryV2,
  Masterchef,
  LinbingPool,
  SousChef,
  SousChefV2,
  SmartNftStake,
  BunnySpecial,
  LpToken,
  ClaimRefund,
  TradingCompetition,
  TradingCompetitionV2,
  EasterNft,
  CakeVault,
  Multicall,
  BunnySpecialCakeVault,
  BunnySpecialPrediction,
  BunnySpecialLottery,
  NftMarket,
  NftSale,
  PancakeSquad,
  Erc721collection,
  PointCenterIfo,
  LinbingFarm,
  LinbingNftStake,
  LinbingClaimReward,
  LinbingNft,
  GangverseDarksideNFT,
} from 'config/abi/types'
import { LinbingAutoPoolVault } from 'config/abi/types/LinbingAutoPoolVault'
import { nftFarmsConfig } from 'config/constants'
import { nftFarmsGangverseConfig } from 'config/constants'

// No need for cronos
const getContract = (abi: any, address: string, signer?: Signer | Provider) => {
  const signerOrProvider = signer ?? simpleRpcProvider
  return new Contract(address, abi, signerOrProvider)
}

const getContractForCronos = (abi: any, address: string, signer?: Signer | Provider) => {
  const signerOrProvider = signer ?? simpleCronosRpcProvider
  return new Contract(address, abi, signerOrProvider)
}

export const getBep20Contract = (address: string, signer?: Signer | Provider) => {
  return getContract(bep20Abi, address, signer) as Erc20
}
export const getErc721Contract = (address: string, signer?: Signer | Provider) => {
  return getContract(erc721Abi, address, signer) as Erc721
}
export const getLpContract = (address: string, signer?: Signer | Provider) => {
  return getContract(lpTokenAbi, address, signer) as LpToken
}
export const getIfoV1Contract = (address: string, signer?: Signer | Provider) => {
  return getContract(ifoV1Abi, address, signer) as IfoV1
}
export const getIfoV2Contract = (address: string, signer?: Signer | Provider) => {
  return getContract(ifoV2Abi, address, signer) as IfoV2
}
export const getLinbingNFTContract = (address: string, signer?: Signer | Provider) => {
  return getContract(linbingNftAbi, address, signer) as LinbingNft
}

export const getGangverseDarksideNFTContract = (address: string, signer?: Signer | Provider) => {
  return getContract(GangverseDarksideNftAbi, address, signer) as GangverseDarksideNFT
}





export const getSouschefContract = (id: number, signer?: Signer | Provider) => {
  const config = poolsConfig.find((pool) => pool.sousId === id)
  const abi = config.poolCategory === PoolCategory.BINANCE ? sousChefBnb : sousChef
  return getContract(abi, getAddress(config.contractAddress), signer) as SousChef
}
export const getSouschefV2Contract = (id: number, signer?: Signer | Provider) => {
  const config = poolsConfig.find((pool) => pool.sousId === id)
  return getContract(sousChefV2, getAddress(config.contractAddress), signer) as SousChefV2
}

// -----
export const getSmartNftStakeContract = (id: number, signer?: Signer | Provider) => {
  const config = nftFarmsConfig.find((farm) => farm.pid === id)
  return getContract(smartNftStake, getAddress(config.contractAddresses), signer) as SmartNftStake
}

export const getSmartNftStakeGangverseContract = (id: number, signer?: Signer | Provider) => {
  const config = nftFarmsGangverseConfig.find((farm) => farm.pid === id)
  return getContract(smartNftStake, getAddress(config.contractAddresses), signer) as SmartNftStake
}






export const getPointCenterIfoContract = (signer?: Signer | Provider) => {
  return getContract(pointCenterIfo, getPointCenterIfoAddress(), signer) as PointCenterIfo
}
export const getCakeContract = (signer?: Signer | Provider) => {
  return getContract(cakeAbi, tokens.cake.address, signer) as Cake
}
// -----
export const getLinbingContract = (signer?: Signer | Provider) => {
  return getContractForCronos(cakeAbi, tokens.linbing.address, signer) as Cake
}
export const getProfileContract = (signer?: Signer | Provider) => {
  return getContract(profileABI, getPancakeProfileAddress(), signer) as PancakeProfile
}
export const getPancakeRabbitContract = (signer?: Signer | Provider) => {
  return getContract(pancakeRabbitsAbi, getPancakeRabbitsAddress(), signer) as PancakeRabbits
}
export const getBunnyFactoryContract = (signer?: Signer | Provider) => {
  return getContract(bunnyFactoryAbi, getBunnyFactoryAddress(), signer) as BunnyFactory
}
export const getBunnySpecialContract = (signer?: Signer | Provider) => {
  return getContract(bunnySpecialAbi, getBunnySpecialAddress(), signer) as BunnySpecial
}
export const getLotteryV2Contract = (signer?: Signer | Provider) => {
  return getContract(lotteryV2Abi, getLotteryV2Address(), signer) as LotteryV2
}
export const getMasterchefContract = (signer?: Signer | Provider) => {
  return getContract(masterChef, getMasterChefAddress(), signer) as Masterchef
}
// Only Pool Version Masterchef
export const getLinbingPoolContract = (signer?: Signer | Provider) => {
  return getContractForCronos(linbingPool, getLinbingPoolAddress(), signer) as LinbingPool
}
// Only Farm Version Masterchef
export const getLinbingFarmContract = (signer?: Signer | Provider) => {
  return getContractForCronos(linbingFarm, getLinbingFarmAddress(), signer) as LinbingFarm
}
// NFT Stake Version Masterchef
export const getLinbingNftStakeContract = (signer?: Signer | Provider) => {
  return getContractForCronos(linbingNftStake, getLinbingNftStakeAddress(), signer) as LinbingNftStake
}
export const getLinbingClaimRewardContract = (signer?: Signer | Provider) => {
  return getContractForCronos(linbingClaimReward, getLinbingClaimRewardAddress(), signer) as LinbingClaimReward
}
export const getLinbingClaimRewardV2Contract = (signer?: Signer | Provider) => {
  return getContractForCronos(linbingClaimReward, getLinbingClaimRewardV2Address(), signer) as LinbingClaimReward
}
export const getClaimRefundContract = (signer?: Signer | Provider) => {
  return getContract(claimRefundAbi, getClaimRefundAddress(), signer) as ClaimRefund
}
export const getTradingCompetitionContract = (signer?: Signer | Provider) => {
  return getContract(tradingCompetitionAbi, getTradingCompetitionAddress(), signer) as TradingCompetition
}

export const getTradingCompetitionContractV2 = (signer?: Signer | Provider) => {
  return getContract(tradingCompetitionV2Abi, getTradingCompetitionAddressV2(), signer) as TradingCompetitionV2
}
export const getEasterNftContract = (signer?: Signer | Provider) => {
  return getContract(easterNftAbi, getEasterNftAddress(), signer) as EasterNft
}
export const getCakeVaultContract = (signer?: Signer | Provider) => {
  return getContract(cakeVaultAbi, getCakeVaultAddress(), signer) as CakeVault
}

// For Linbing Auto Pool // CakeVaultContract
export const getLinbingAutoPoolVaultContract = (signer?: Signer | Provider) => {
  return getContractForCronos(linbingAutoPoolVaultAbi, getLinbingAutoPoolVaultAddress(), signer) as LinbingAutoPoolVault
}
export const getIfoPoolContract = (signer?: Signer | Provider) => {
  return getContract(ifoPoolAbi, getIfoPoolAddress(), signer) as IfoPool
}

export const getPredictionsContract = (signer?: Signer | Provider) => {
  return getContract(predictionsAbi, getPredictionsAddress(), signer) as unknown as Predictions
}

export const getChainlinkOracleContract = (signer?: Signer | Provider) => {
  return getContract(chainlinkOracleAbi, getChainlinkOracleAddress(), signer) as ChainlinkOracle
}
export const getMulticallContract = () => {
  return getContract(MultiCallAbi, getMulticallAddress(), simpleRpcProvider) as Multicall
}

export const getMulticallCronosContract = () => {
  return getContract(MultiCallAbi, getMulticallCronosAddress(), simpleCronosRpcProvider) as Multicall
}

export const getBunnySpecialCakeVaultContract = (signer?: Signer | Provider) => {
  return getContract(bunnySpecialCakeVaultAbi, getBunnySpecialCakeVaultAddress(), signer) as BunnySpecialCakeVault
}
export const getBunnySpecialPredictionContract = (signer?: Signer | Provider) => {
  return getContract(bunnySpecialPredictionAbi, getBunnySpecialPredictionAddress(), signer) as BunnySpecialPrediction
}
export const getBunnySpecialLotteryContract = (signer?: Signer | Provider) => {
  return getContract(bunnySpecialLotteryAbi, getBunnySpecialLotteryAddress(), signer) as BunnySpecialLottery
}
export const getBunnySpecialXmasContract = (signer?: Signer | Provider) => {
  return getContract(bunnySpecialXmasAbi, getBunnySpecialXmasAddress(), signer)
}

export const getFarmAuctionContract = (signer?: Signer | Provider) => {
  return getContract(farmAuctionAbi, getFarmAuctionAddress(), signer) as unknown as FarmAuction
}
export const getAnniversaryAchievementContract = (signer?: Signer | Provider) => {
  return getContract(anniversaryAchievementAbi, getAnniversaryAchievement(), signer) as AnniversaryAchievement
}
export const getNftMarketContract = (signer?: Signer | Provider) => {
  return getContract(nftMarketAbi, getNftMarketAddress(), signer) as NftMarket
}
export const getNftSaleContract = (signer?: Signer | Provider) => {
  return getContract(nftSaleAbi, getNftSaleAddress(), signer) as NftSale
}
export const getPancakeSquadContract = (signer?: Signer | Provider) => {
  return getContract(pancakeSquadAbi, getPancakeSquadAddress(), signer) as PancakeSquad
}
export const getErc721CollectionContract = (signer?: Signer | Provider, address?: string) => {
  return getContract(erc721CollectionAbi, address, signer) as Erc721collection
}
