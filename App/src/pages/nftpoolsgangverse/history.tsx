import { useContext } from 'react'
import { FarmsPageLayout, FarmsContext } from 'views/NftFarmsGangverse'
import FarmCard from 'views/NftFarmsGangverse/components/FarmCard/FarmCard'
import { getDisplayApr } from 'views/NftFarmsGangverse/Farms'
import { usePriceCakeBusd } from 'state/nftFarmsGangverse/hooks'
import { useWeb3React } from '@web3-react/core'

const FarmsHistoryPage = () => {
  const { account } = useWeb3React()
  const { chosenFarmsMemoized } = useContext(FarmsContext)
  const cakePrice = usePriceCakeBusd()

  return (
    <>
      {chosenFarmsMemoized.map((farm) => (
        <FarmCard
          key={farm.pid}
          farm={farm}
          displayApr={getDisplayApr(farm.apr)}
          cakePrice={cakePrice}
          account={account}
          removed
        />
      ))}
    </>
  )
}

FarmsHistoryPage.Layout = FarmsPageLayout

export default FarmsHistoryPage
