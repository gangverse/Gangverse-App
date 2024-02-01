import { CardProps } from '@pancakeswap/uikit'
import { NftLocation, NftToken } from 'state/nftMarketGangverse/types'

export interface CollectibleCardProps extends CardProps {
  nft: NftToken
  nftLocation?: NftLocation
  currentAskPrice?: number
  isUserNft?: boolean
  directLink?: string
}
