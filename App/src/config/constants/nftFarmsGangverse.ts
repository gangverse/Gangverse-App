import { serializeTokens } from './tokens'
import { SerializedNftFarmGangverseConfig } from './types'
import { ChainId } from '@linbingdefi/sdk'

const serializedTokens = serializeTokens()

const nftFarmsGangverse: SerializedNftFarmGangverseConfig[] = [
  

{
    pid: 1,
    lpSymbol: 'Gangverse Darkside',
    nftAddresses: {
      25: '0xC376D7a55a3Fb6FA0B12D90fd96FeFB0d96702bF',
    },
    contractAddresses: {
      25: '0x33EFAA02B3F80F20676C478d3A1EDA1A47ECA0a3',
    },
    
    tokenPerBlock: '0.005',
    participantThreshold: 1000,
    isFinished: false,
    earningToken: serializedTokens.wcro,
    // sideRewards: [
    // {token: 'CRO', percentage: 0},
    //  ],
    // supportedCollectionPids: [1],
    mainCollectionWeight: '1000',
    performanceFee: '0',
    projectLink: 'https://gangverse.club',
    banner: "/images/stakenft/banner/darkside.png",
    avatar: "/images/stakenft/logo/darkside.png",
  },
  {
    pid: 2,
    lpSymbol: 'Gangverse',
    nftAddresses: {
      25: '0xaBaa122B9E6B64FCBDD55A03eEb8729220F9C589',
    },
    contractAddresses: {
      25: '0x6fAa4Cff66684Df82460C0eD6c53398E38C8b334',
    },
    
    tokenPerBlock: '0.01',
    participantThreshold: 8888,
    isFinished: true,
    earningToken: serializedTokens.wcro,
    // sideRewards: [
    // {token: 'CRO', percentage: 0},
    //  ],
    // supportedCollectionPids: [1],
    mainCollectionWeight: '8888',
    performanceFee: '0',
    projectLink: 'https://gangverse.club',
    banner: "/images/stakenft/banner/gangverse.png",
    avatar: "/images/stakenft/logo/gangverse.png",
  },
  {
    pid: 3,
    lpSymbol: 'LIFE OF HEL',
    nftAddresses: {
      25: '0x51084c32AA5ee43a0e7bD8220195da53b5c69868',
    },
    contractAddresses: {
      25: '0x60288F086051a40EcC680A91896836d9Fcef1445',
    },
    
    tokenPerBlock: '0.01',
    participantThreshold: 3000,
    isFinished: true,
    earningToken: serializedTokens.wcro,
    // sideRewards: [
    // {token: 'CRO', percentage: 0},
    //  ],
    // supportedCollectionPids: [1],
    mainCollectionWeight: '3000',
    performanceFee: '0',
    projectLink: 'https://www.lifeofhel.xyz/',
    banner: "/images/stakenft/banner/life.jpg",
    avatar: "/images/stakenft/logo/life.jpg",
  },
  {
    pid: 4,
    lpSymbol: 'Dirty Sockers',
    nftAddresses: {
      25: '0xFA46EeE0e74e7b05225F497FeEeA3cF48Ab1ae8B',
    },
    contractAddresses: {
      25: '0xac9160bca471378582EAab731186988364dE36a2',
    },
    
    tokenPerBlock: '0.005',
    participantThreshold: 5500,
    isFinished: true,
    earningToken: serializedTokens.wcro,
    // sideRewards: [
    // {token: 'CRO', percentage: 0},
    //  ],
    // supportedCollectionPids: [1],
    mainCollectionWeight: '5500',
    performanceFee: '0',
    projectLink: 'https://www.dirtysockers.xyz/',
    banner: "/images/stakenft/banner/dirty.jpg",
    avatar: "/images/stakenft/logo/dirty.jpg",
  },
  {
    pid: 5,
    lpSymbol: 'Yurosako',
    nftAddresses: {
      25: '0xa4cbC591c6D20a1B5CE35e52779191F4A35d62D1',
    },
    contractAddresses: {
      25: '0xc8AA1eC20cAFF7DaDb954303F8fbC5803693ddE1',
    },
    
    tokenPerBlock: '0.001',
    participantThreshold: 3939,
    isFinished: true,
    earningToken: serializedTokens.wcro,
    // sideRewards: [
    // {token: 'CRO', percentage: 0},
    //  ],
    // supportedCollectionPids: [1],
    mainCollectionWeight: '3939',
    performanceFee: '0',
    projectLink: 'https://yurosako.com/',
    banner: "/images/stakenft/banner/yurosako.jpg",
    avatar: "/images/stakenft/logo/yurosako.jpg",
  },
  
  

].filter((f) => !!f.nftAddresses[ChainId.CRONOS])

export default nftFarmsGangverse
