// @ts-nocheck
import { useState } from 'react'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { Card, Flex, Text, Skeleton, PrizeIcon } from '@pancakeswap/uikit'
import { DeserializedNftFarmGangverse } from 'state/typesgangverse'
import { getCronosScanLink } from 'utils'
import { useTranslation } from 'contexts/Localization'
import ExpandableSectionButton from 'components/ExpandableSectionButton'
import { getAddress } from 'utils/addressHelpers'
import DetailsSection from './DetailsSection'
import CardHeadingWithBanner from './CardHeadingWithBanner'
import CardActionsContainer from './CardActionsContainer'
import ApyButton from './ApyButton'
import Balance from 'components/Balance'
import nftFarmsGangverseConfig from 'config/constants/nftFarmsGangverse'

export interface NftFarmGangverseWithStakedValue extends DeserializedNftFarmGangverse {
  apr?: number
  lpRewardsApr?: number
  liquidity?: BigNumber
}

const StyledCard = styled(Card)`
  align-self: baseline;
`

const FarmCardInnerContainer = styled(Flex)`
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
`

const ExpandingWrapper = styled.div`
  padding: 24px;
  border-top: 2px solid ${({ theme }) => theme.colors.cardBorder};
  overflow: hidden;
`

interface FarmCardProps {
  farm: NftFarmGangverseWithStakedValue
  displayApr: string
  removed: boolean
  cakePrice?: BigNumber
  account?: string
}

const FarmCard: React.FC<FarmCardProps> = ({ farm, displayApr, removed, cakePrice, account }) => {
  const { t } = useTranslation()

  const [showExpandableSection, setShowExpandableSection] = useState(false)

  const lpLabel = farm.lpSymbol && farm.lpSymbol.replace('Cro', '')
  const earnLabel = farm.earningToken ? farm.earningToken.symbol: 'CRO'

  const apyModalLink = "/nfts/collections"
  const nftAddress = getAddress(farm.nftAddresses)
  const isPromotedFarm = false //farm.token.symbol === 'CRO' Caution: Fix
  const sideRewards = farm.sideRewards ? farm.sideRewards : []
  const farmConfig = nftFarmsGangverseConfig.filter((farmConfig) => farmConfig.pid == farm.pid)[0]

  return (
    <StyledCard isActive={isPromotedFarm}>
      <FarmCardInnerContainer>
        <CardHeadingWithBanner
          lpLabel={lpLabel}
          multiplier={farm.multiplier}
          nftToken={nftAddress}
          pid={farm.pid}
          disabled={farm.isFinished}
        />

{!removed && (
  <>
    {sideRewards.length === 0 ? (
      <Flex justifyContent="space-between" alignItems="center">
        <Text>{'APR'}:</Text>
        <Text bold style={{ display: 'flex', alignItems: 'center' }}>
        {Number(displayApr).toFixed(2) ? (farm.apr*31) : <Skeleton height={24} width={80} /> }%
        </Text>
      </Flex>
    ) : (
      <>
        <Flex justifyContent="center" alignItems="center">
        <PrizeIcon width="26px" color="#E91E63" mr="4px" /> <Text color='#fdda5a'>{'APR'}</Text>
        </Flex>
        <Flex justifyContent="space-between">
            <Text>{earnLabel}</Text>
            {Number(displayApr).toFixed(2) ? (farm.apr*31) : <Skeleton height={24} width={80} /> }%
        </Flex>
        {sideRewards.map((reward, index) => (
          <Flex key={index} justifyContent="space-between">
            <Text>{reward.token}</Text>
            <Text bold><Balance value={Number(displayApr) * (reward.percentage / 100)} /></Text>
          </Flex>
        ))}
      </>
    )}
  </>
)}

{sideRewards.length === 0 && (
  <Flex justifyContent="space-between">
    <Text>{t('Earn')}:</Text>
    <Text bold>{earnLabel}</Text>
  </Flex>
)}


        <CardActionsContainer
          farm={farm}
          lpLabel={lpLabel}
          account={account}
          cakePrice={cakePrice}
          addLiquidityUrl={apyModalLink}
        />
      </FarmCardInnerContainer>

      <ExpandingWrapper>
        <ExpandableSectionButton
          onClick={() => setShowExpandableSection(!showExpandableSection)}
          expanded={showExpandableSection}
        />
        {showExpandableSection && (
          <DetailsSection
            removed={removed}
            bscScanAddress={getCronosScanLink(nftAddress, 'address')}
            earningToken={farm.earningToken}
            totalStaked={farm.liquidity}
            startBlock={farm.startBlock}
            endBlock={farm.endBlock}
            stakingLimit={farm.stakingLimit}
            stakingLimitEndBlock={farm.stakingLimitEndBlock}
            lpLabel={lpLabel}
            addLiquidityUrl={apyModalLink}
            projectLink={farmConfig.projectLink}
          />
        )}
      </ExpandingWrapper>
    </StyledCard>
  )
}

export default FarmCard
