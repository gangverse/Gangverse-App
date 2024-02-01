import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Gangverse',
  description:
    'Gangverse Stake',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('Gangverse')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('Gangverse')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('Gangverse')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('Gangverse')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('Gangverse')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('Gangverse')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('Gangverse')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('Gangverse')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('Gangverse')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('Gangverse')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('Gangverse')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('Gangverse')}`,
      }
    case '/partner-nft-staking':
      return {
        title: `${'Partner NFT Staking'} | ${t('Gangverse')}`,
      }
      case '/gangverse-nft-staking':
        return {
          title: `${t('Gangverse Pools')} | ${t('Gangverse')}`,
        }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('Gangverse')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('Gangverse')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('Gangverse')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('Gangverse')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('Gangverse')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('Gangverse')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('Gangverse Info & Analytics')}`,
        description: 'View statistics for Gangverse exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('Gangverse Info & Analytics')}`,
        description: 'View statistics for Gangverse exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('Gangverse Info & Analytics')}`,
        description: 'View statistics for Gangverse exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('Gangverse')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('Gangverse')}`,
      }
    case '/nfts/activity':
      return {
        title: `${t('Activity')} | ${t('Gangverse')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Profile')} | ${t('Gangverse')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('Gangverse')}`,
      }
    default:
      return null
  }
}
