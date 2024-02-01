import { useTranslation } from 'contexts/Localization'
import { Flex, Text, useMatchBreakpoints } from '@pancakeswap/uikit'
import Image from 'next/image'
import  styled  from 'styled-components'
import aptosBallRocket from '../../images/aptos-ball-rocket.png'
import nftRocket from '../../images/nft2.png'
import cronosToken from '../../images/cronos.png'
import { ChainTags } from './ChainTags'
import { MetricsCard } from './MetricsCard'

const ImageLayer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  overflow: hidden;
  display: none;
  ${({ theme }) => theme.mediaQueries.lg} {
    display: block;
  }
`
const NftRocket = styled.div`
  position: absolute;
  left: -65px;
  ${({ theme }) => theme.mediaQueries.xxl} {
    bottom: 221px;
    left: 20px;
  }
`
const CronosToken = styled.div`
  position: absolute;
  right: 0;
  top: 81px;
  ${({ theme }) => theme.mediaQueries.xxl} {
    right: 65px;
    bottom: -30px;
  }
`

const Stats = () => {
  const { t } = useTranslation()
  const { isMobile, isSm, isMd, isXxl } = useMatchBreakpoints()

  return (
    <><Flex justifyContent="center" alignItems="center" flexDirection="column" overflow="hidden" marginBottom={25}>   
    <img src="/images/home/line.png" alt="rewards" width={400} height={1}  />
    </Flex>
    <Flex justifyContent="center" alignItems="center" flexDirection="column" overflow="hidden">
      <Text textAlign="center" lineHeight="110%" fontWeight={600} mb="4px" fontSize={isMobile ? '20px' : '32px'}>
      {'Huge trading opportunities'}
      </Text>
      <Text
        textAlign="center"
        lineHeight="110%"
        fontWeight={600}
        fontSize={isMobile ? '20px' : '32px'}
        mb={isMobile ? '32px' : '48px'}
      >
        {'Constant expansion of collections'}
      </Text>
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection={isMobile ? 'column' : 'row'}
        width={['100%', '100%', '100%', '800px']}
        style={{ gap: isMobile ? 32 : 50 }}
        mb={isMobile ? '32px' : '48px'}
        flexWrap="wrap"
      >
        <MetricsCard
          width={isSm || isMd ? '100%' : 'auto'}
          title={t('NFT Collections:')}
          value={3773}
          description={t('Contracts')}
        />
        <MetricsCard title={t('NFT Volume:')} value={423985719} description={t('CRO')} />
        <MetricsCard title={t('Total NFT Asset:')}  value={3542591} description={t('Quantity for December 2023')} />
      </Flex>
      <ChainTags />

      
     {/* <ImageLayer>
        <NftRocket>
          <Image src={nftRocket} alt="nftRocket" width={200} height={154} placeholder="blur" />
        </NftRocket>
        <CronosToken>
        <Image src={cronosToken} alt="cronosToken" width={150} height={150} placeholder="blur" />
        </CronosToken>

      </ImageLayer> */}


    </Flex></>
  ) 
}

export default Stats