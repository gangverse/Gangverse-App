import { NftAttribute } from 'state/nftMarketGangverse/types'

export interface Item {
  label: string
  attr: NftAttribute
  count?: number
  image?: string
}
