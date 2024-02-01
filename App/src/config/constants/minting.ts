import { Token, ChainId } from '@linbingdefi/sdk'
import tokens from './tokens'
import farms from './farms'
import { Ifo, Minting } from './types'
import {  getLinbingNftAddress } from 'utils/addressHelpers'

//export const cakeBnbLpToken = new Token(ChainId.MAINNET, farms[1].lpAddresses[ChainId.MAINNET], 18, farms[1].lpSymbol)

const collectionLinks = {
  'linbing': 'https://gangverse.club',

}

const ifos: Minting[] = [
 //============================LIVE MINT NFTS====================================
  {
    id: 'GangverseCard',
    stake_pid: 1,
    name: 'Gangverse Card',
    description: 'The Gangverse Card is produced in a limited quantity and is the first type of card that enables you to benefit from various privileges on the Gangverse App Platform.',
    address: getLinbingNftAddress(),
    symbol: 'GangverseCard',
    totalSupply: 100,
    lastPrice: 100,
    isActive: true,
    status: 'livepublic',
    avatar: "/images/banners/cardlogo.png",
    banner: {
      large: "/images/banners/cardbanner.png",
      small: "/images/banners/cardbanner.png",
    },
    sampleNftImage: { 'tokenId': 1, 'image': 'https://gateway.pinata.cloud/ipfs/QmU7gcgK4LKGrWUGrg6JvjX5VUE7zHCG3ASZdQomxuY1wh/1.png', 'link': collectionLinks['linbing'] },
    showCase: [
      { 'tokenId': 1, 'image': 'https://gateway.pinata.cloud/ipfs/QmU7gcgK4LKGrWUGrg6JvjX5VUE7zHCG3ASZdQomxuY1wh/5.png', 'link': collectionLinks['linbing'] },
      { 'tokenId': 2, 'image': 'https://gateway.pinata.cloud/ipfs/QmU7gcgK4LKGrWUGrg6JvjX5VUE7zHCG3ASZdQomxuY1wh/2.png', 'link': collectionLinks['linbing'] },
      { 'tokenId': 3, 'image': 'https://gateway.pinata.cloud/ipfs/QmU7gcgK4LKGrWUGrg6JvjX5VUE7zHCG3ASZdQomxuY1wh/10.png', 'link': collectionLinks['linbing'] },
      { 'tokenId': 4, 'image': 'https://gateway.pinata.cloud/ipfs/QmU7gcgK4LKGrWUGrg6JvjX5VUE7zHCG3ASZdQomxuY1wh/4.png', 'link': collectionLinks['linbing'] },
    ],
    faq: [
      {
        title: "What is a Gangverse Card?",
        description: ["The Gangverse Card is a card created by the Gangverse providing exclusive privileges. It offers access to upcoming updates on the Gangverse App Platform, whitelist privileges, and discounted options for minting NFT projects."]
      },
      {
        title: "How can I acquire these NFTs?",
        description: ["This card can only be minted through the Gangverse App Platform. Minting is not possible from any other source."]
      },
      {
        title: "When is it possible to mint a Gangverse Card?",
        description: ["To be announced (TBA)"]
      },
      {
        title: "What is the pricing and supply?",
        description: ["The Gangverse Card is priced at 100 CRO for everyone. Gangverse NFT holders can acquire this card with a 10% discount. There will be a total of 100 Gangverse Basic Cards available."]
      },
      {
        title: "Can I use Gangverse NFTs on other platforms?",
        description: ["Yes, you certainly can. Gangverse NFTs are built on the Cronos blockchain and are thus compatible with any other marketplaces that support Cronos, such as Minted Network."]
      }
    ],
    poolUnlimited: {
      saleAmount: '100 NFT',
      distributionRatio: 1,
    },
    currency: tokens.cake,
    token: tokens.linbing,
    releaseBlockNumber: 12652664,
    articleUrl: 'https://gangverse.club',
    version: 3.1,
    openSeaUrl: 'https://minted.network/collections/cronos/0xc571a1f7fecbc0722ea3100e25fbab2d05d291e8',
    discordUrl: 'https://discord.gg/u9NJ8GBPXA',
    telegramUrl: 'https://t.me/',
    twitterUrl: 'https://twitter.com/gangverse',
  },


]

export default ifos
