import { ChainId } from '@linbingdefi/sdk'
import Trans from 'components/Trans'
import { VaultKey } from 'state/types'
import { CHAIN_ID } from './networks'
import tokens, { serializeTokens } from './tokens'
import { SerializedPoolConfig, PoolCategory } from './types'

const serializedTokens = serializeTokens()

export const vaultPoolConfig = {
  [VaultKey.CakeVault]: {
    name: <Trans>Auto LINBING</Trans>,
    description: <Trans>Automatic restaking</Trans>,
    autoCompoundFrequency: 5000,
    gasLimit: 380000,
    tokenImage: {
      primarySrc: `/images/tokens/${tokens.linbing.address}.png`,
      secondarySrc: '/images/tokens/autorenew.svg',
    },
  },
  [VaultKey.IfoPool]: {
    name: 'IFO CAKE',
    description: <Trans>Stake CAKE to participate in IFOs</Trans>,
    autoCompoundFrequency: 1,
    gasLimit: 500000,
    tokenImage: {
      primarySrc: `/images/tokens/${tokens.cake.address}.png`,
      secondarySrc: `/images/tokens/ifo-pool-icon.svg`,
    },
  },
} as const

/// It chooses network id which determined in environment
const pools: SerializedPoolConfig[] = [
  {
    sousId: 0,
    stakingToken: serializedTokens.linbing,
    earningToken: serializedTokens.linbing,
    contractAddress: {
      97: '0xEb69bFC53Be34EAC726D8EfE3d4001a04f402b06',
      56: '0xEb69bFC53Be34EAC726D8EfE3d4001a04f402b06',
      25: '0xEb69bFC53Be34EAC726D8EfE3d4001a04f402b06', 
      338: '0xEb69bFC53Be34EAC726D8EfE3d4001a04f402b06'
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.1', 
    sortOrder: 1,
    isFinished: false,
  },

].filter((p) => !!p.contractAddress[ChainId.CRONOS])



export default pools
