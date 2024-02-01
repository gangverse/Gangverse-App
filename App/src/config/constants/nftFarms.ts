import { serializeTokens } from './tokens'
import { SerializedNftFarmConfig } from './types'
import { CHAIN_ID } from './networks'
import { ChainId } from '@linbingdefi/sdk'

const serializedTokens = serializeTokens()

const nftFarms: SerializedNftFarmConfig[] = [
  

  {
    pid: 1,
    lpSymbol: 'Cronos Cats Club',
    nftAddresses: {
      25: '0xA2EBd9D8A5829E64598Fb6159d5a187C73A4029a',
      80001: '0xA2EBd9D8A5829E64598Fb6159d5a187C73A4029a'
    },
    contractAddresses: {
      25: '0xd7F6B10a6Af929EA3d5D6272Cf9A3c21682E5DDc',
      80001: '0xd7F6B10a6Af929EA3d5D6272Cf9A3c21682E5DDc',
    },
    tokenPerBlock: '0.01',
    participantThreshold: 5000,
    isFinished: true,
    earningToken: serializedTokens.wcro,
    // sideRewards: [
    //  {token: 'CRO', percentage: 0},
    //  ],
    //  supportedCollectionPids: [1],
    mainCollectionWeight: '5000',
    performanceFee: '0',
    projectLink: 'https://cronoscats.club',
    banner: "/images/stakenft/banner/cronoscats.png",
    avatar: "/images/stakenft/logo/cronoscats.png",
  },
  

].filter((f) => !!f.nftAddresses[ChainId.CRONOS])

export default nftFarms
