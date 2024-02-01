import { TranslateFunction } from 'contexts/Localization/types'
import { SalesSectionProps } from '.'

export const swapSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: ('Exclusive Airdrops for NFT Holders'),
  bodyText: ('All NFT holders, even those with free NFTs, will receive new tokens, including $CRO.'),
  reverse: false,
  primaryButton: {
    to: '/gangverse-nft-staking',
    text: ('Stake NFT'),
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.gangverse.club/',
    text: ('Learn'),
    external: true,
  },
  images: {
    path: '/images/home/trade/',
    attributes: [
      { src: 'usdt', alt: ('USDT token') },
      { src: 'bitcoin', alt: ('BTC token') },
      { src: 'cronos2', alt: ('CRO token') },
    ],
  },
})

export const earnSectionData = SalesSectionProps => ({
  headingText: 'Boost Earnings in Pools and Farms with NFTs',
  bodyText: 'Enhance your APY in pools and farms using your Gangverse NFT.',
  reverse: true,
  primaryButton: {
    to: '/nfts/collections',
    text: ('Buy Gangverse'),
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.gangverse.club/',
    text: 'Learn',
    external: true,
  },
  images: {
    path: '/images/home/',
    attributes: [

      { src: 'rocket', alt: ('Stocks chart') },

    ],
  },
})

export const cakeSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: ('CAKE makes our world go round.'),
  bodyText: ('CAKE token is at the heart of the PancakeSwap ecosystem. Buy it, win it, farm it, spend it, stake it... heck, you can even vote with it!'),
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0xAb2FA91c4bBAA64Ad836a336306b31fDfFa2ABF9',
    text: ('Buy LINBING'),
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.gangverse.club/',
    text: ('Learn'),
    external: true,
  },

  images: {
    path: '/images/home/cake/',
    attributes: [
      { src: 'bottom-right', alt: t('LINBING angry birds') },
      { src: 'top-right', alt: t('LINBING Simpsons') },
      { src: 'coin', alt: t('LINBING Vader') },
      { src: 'top-left', alt: t('LINBING minions') },
    ],
  },
})
