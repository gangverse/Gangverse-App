import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [

      {
        label: t('What is Gangverse?'),
        href: 'https://gangverse.club/#story',
      },
      {
        label: t('Community'),
        href: 'https://discord.gg/u9NJ8GBPXA',
      },
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('FAQ'),
        href: 'https://discord.gg/u9NJ8GBPXA',
      },
      {
        label: t('Guides'),
        href: 'https://docs.gangverse.club/',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/gangverse',
      },
      {
        label: t('Documentation'),
        href: 'https://docs.gangverse.club/',
      },
    ],
  },
]
