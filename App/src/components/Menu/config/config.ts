import {
  MenuItemsType,
  DropdownMenuItemType,
  SwapIcon,
  SwapFillIcon,
  EarnFillIcon,
  EarnIcon,
  TrophyIcon,
  TrophyFillIcon,
  NftIcon,
  NftFillIcon,
  DropdownMenuItems,
  InfoIcon,
} from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export type ConfigMenuDropDownItemsType = DropdownMenuItems & { hideSubNav?: boolean }
export type ConfigMenuItemsType = Omit<MenuItemsType, 'items'> & { hideSubNav?: boolean; image?: string } & {
  items?: ConfigMenuDropDownItemsType[]
}

const addMenuItemSupported = (item, chainId) => {
  if (!chainId || !item.supportChainIds) {
    return item
  }
  if (item.supportChainIds?.includes(chainId)) {
    return item
  }
  return {
    ...item,
    disabled: true,
  }
}

const config: (
  ContextApi,
  isDark: boolean,
  languageCode?: string,
  chainId?: number,
) => ConfigMenuItemsType[] = (chainId) =>
  [

    {
      
      label: 'Home',
      icon: 'Moon',
      href: '/',
      showItemsOnMobile: false,
      items: [],
  },

   {
      
      label: 'Launchpad',
      icon: 'Nft',
      href: '/nfts',
      initialOpenState: true,
      items: [
          {
              label: 'Mint',
              href: '/nfts/collections',
          },          

      ],
  },
   
  
    {
      label: 'Staking',
      icon: 'Earn',
      href: '/partner-nft-staking',
      fillIcon: NftFillIcon,
      items: [
        {
          label: 'Partner Staking',
          href: '/partner-nft-staking',
        },
        {
          label: 'Gangverse Staking',
          href: '/gangverse-nft-staking',
        },
      ],
    },
    {
      label: 'More',
      icon: 'More',
      hideSubNav: true,
      items: [
        {
          label: 'Gangverse Social Club',
          href: 'https://gangverse.club/',
          type: DropdownMenuItemType.EXTERNAL_LINK,
      },
        {
          label: 'Crypto.com NFT',
          href: 'https://crypto.com/nft/collection/674c88b39488037cb63471dd2a9c263f',
          type: DropdownMenuItemType.EXTERNAL_LINK,
      },
        {
          label: 'Minted Network',
          href: 'https://minted.network/collections/cronos/0xabaa122b9e6b64fcbdd55a03eeb8729220f9c589',
          type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: 'Ebisus Bay',
        href: 'https://app.ebisusbay.com/collection/gangverse-social-club',
        type: DropdownMenuItemType.EXTERNAL_LINK,
    },
        {
          type: DropdownMenuItemType.DIVIDER,
        },
        {
          label: 'Launchpad Request',
          href: 'https://airtable.com/app1r9mtELUMl9L2s/pagIfWgaouLKYAig4/form',
          type: DropdownMenuItemType.EXTERNAL_LINK,
        },
        {
          label: 'Stake Request',
          href: 'https://airtable.com/appnJY2QLjGE9cSWG/pagOW23Q6Iz8VqH4v/form',
          type: DropdownMenuItemType.EXTERNAL_LINK,
        },  
        {
          type: DropdownMenuItemType.DIVIDER,
        },
        {
          label: 'Docs',
          href: 'https://docs.gangverse.club',
          type: DropdownMenuItemType.EXTERNAL_LINK,
        },
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
  ].map((item) => addMenuItemSupported(item, chainId))

export default config
