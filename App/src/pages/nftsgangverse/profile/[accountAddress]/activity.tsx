import { NftProfileLayout } from 'views/NftGangverse/market/Profile'
import ActivityHistory from 'views/NftGangverse/market/Profile/components/ActivityHistory'
import SubMenu from 'views/NftGangverse/market/Profile/components/SubMenu'

const NftProfileActivityPage = () => {
  return (
    <>
      <SubMenu />
      <ActivityHistory />
    </>
  )
}

NftProfileActivityPage.Layout = NftProfileLayout

export default NftProfileActivityPage
