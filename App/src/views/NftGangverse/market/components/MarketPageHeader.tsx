import PageHeader, { PageHeaderProps } from 'components/PageHeader'
import useTheme from 'hooks/useTheme'

const MarketPageHeader: React.FC<PageHeaderProps> = (props) => {
  const { theme } = useTheme()
  const background = theme.isDark
    ? 'linear-gradient(166.77deg, #374047 0%,#374047 100%)'
    : 'linear-gradient(111.68deg, #374047 0%,#374047 100%)'
  return <PageHeader background={background} {...props} />
}

export default MarketPageHeader
