import { memo } from 'react'
import styled from 'styled-components'
import { Text, Flex, Button, ArrowForwardIcon, Heading } from '@pancakeswap/uikit'
import { useActiveIfoWithBlocks } from 'hooks/useActiveIfoWithBlocks'
import { NextLinkFromReactRouter } from 'components/NextLink'
import { useTranslation } from 'contexts/Localization'
import { useCurrentBlock } from 'state/block/hooks'

const StyledSubheading = styled(Heading)`
  background: #ffd800;
  font-size: 20px;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0.5);
  ${({ theme }) => theme.mediaQueries.xs} {
    font-size: 24px;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    -webkit-text-stroke: unset;
  }
  margin-bottom: 8px;
`

const StyledHeading = styled(Heading)`
  color: #ffffff;
  background: -webkit-linear-gradient(#E91E63 0%, #452a7a 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-stroke: 6px transparent;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-transform: uppercase;
  margin-bottom: 16px;
`

const Wrapper = styled.div`
  border-radius: 20px;
  width: 100%;
  background-image: linear-gradient(#151c21,#151c21);
  max-height: max-content;
  overflow: hidden;
  box-shadow:  rgb(0,0,0) 0px 14px 28px,rgb(0,0,0) 0px 10px 10px;
`

const Inner = styled(Flex)`
  position: relative;
  padding: 24px;
  flex-direction: row;
  justify-content: space-between;
  max-height: 220px;
`

const LeftWrapper = styled(Flex)`
  z-index: 1;
  width: 100%;
  flex-direction: column;
  justify-content: center;

  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`

const RightWrapper = styled.div`
  position: absolute;
  right: 15px;
  opacity: 0.9;
  transform: translate(0, -50%);
  top: 51%;

  & img {
    height: 90%;
    width: 174px;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    right: 24px;
    top: 0;
    transform: unset;
    opacity: 1;

    & img {
      height: 100%;
      width: unset;
    }
  }
`
const Banner = () => {
 



  return  (
    <Wrapper>
      <Inner>
        <LeftWrapper>
          <StyledSubheading>Staking</StyledSubheading>
          <StyledHeading scale="xl"> NFT Yield</StyledHeading>
          <NextLinkFromReactRouter to="/gangverse-nft-staking">
            <Button>
              <Text color="invertedContrast" bold fontSize="16px" mr="4px">
               To Staking
              </Text>
              <ArrowForwardIcon color="invertedContrast" />
            </Button>
          </NextLinkFromReactRouter>
        </LeftWrapper>
        <RightWrapper>
          <img
            src={`/images/banners/2.png`}
          />
        </RightWrapper>
      </Inner>
    </Wrapper>
  ) 
}

export default Banner
