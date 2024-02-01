import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'
import { CHAIN_ID } from './networks'
import { ChainId } from '@linbingdefi/sdk'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 1, 2) should always be at the top of the file.
   */
  // CAUTION: We dont'need pool zero for farm
  /*
  {
    pid: 0,
    lpSymbol: 'LINBING',
    lpAddresses: {
      97: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      56: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
      80001: '0xE564106bacd4D3b74a79e0fbDabF0c43828a1DBB' // CHANGE_ADDRESS:CollectToken (test)
    },
    token: serializedTokens.syrup,
    quoteToken: serializedTokens.wbnb,
  },
  */
  {
    pid: 1,
    lpSymbol: 'LINBING-USDT LP',
    lpAddresses: {
      97: '0xD80F55423206b51d0e2B3f5e2ef3DC4c4e99a5B0',
      56: '0xD80F55423206b51d0e2B3f5e2ef3DC4c4e99a5B0',
      25: '0xD80F55423206b51d0e2B3f5e2ef3DC4c4e99a5B0',
      80001: '0xD80F55423206b51d0e2B3f5e2ef3DC4c4e99a5B0' // CHANGE_ADDRESS:Pair
    },
    token: serializedTokens.linbing,
    quoteToken: serializedTokens.usdt,
  },
  {
    pid: 2,
    lpSymbol: 'LINBING-CRO LP',
    lpAddresses: {
      97: '0xA3dcE3A0f6c9Ae51D510bf6EB2b9e38822187A4c',
      56: '0xA3dcE3A0f6c9Ae51D510bf6EB2b9e38822187A4c',
      25: '0xA3dcE3A0f6c9Ae51D510bf6EB2b9e38822187A4c',
      80001: '0xA3dcE3A0f6c9Ae51D510bf6EB2b9e38822187A4c' // CHANGE_ADDRESS:Pair
    },
    token: serializedTokens.linbing,
    quoteToken: serializedTokens.wcro,
  },
  
].filter((f) => !!f.lpAddresses[ChainId.CRONOS])

export default farms
