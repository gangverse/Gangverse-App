import React, { cloneElement } from 'react'
import Marquee from 'react-fast-marquee'
import  styled  from 'styled-components'
import {
    Text,
    useMatchBreakpoints,
  } from '@pancakeswap/uikit'

  

  const TagWrapper = styled.div`
    display: flex;
    padding: 8px 12px;
    height: 38px;
    justify-content: start;
    align-items: center;
    border-radius: 10px;
    margin-right: 8px;
    ${({ theme }) => theme.mediaQueries.sm} {
      padding: 12px 24px;
      height: 46px;
      border-radius: 10px;
      margin-right: 12px;
    }
  `
  
  const StyledMarquee = styled(Marquee)`
    width: 100%;
    max-width: 1063px;
    mask-image: linear-gradient(to left, transparent, black 80px, black calc(100% - 80px), transparent);
    -webkit-mask-image: linear-gradient(to left, transparent, black 80px, black calc(100% - 80px), transparent);
    border-radius: 12px;
  `
  
  const StyledChainIcon = styled('div')`
    svg path {
      fill: ${({ theme }) => theme.colors.invertedContrast};
    }
  `
  
  const newsItems = [
    {
      key: 'Gangverse',
      component: (
        <StyledChainIcon>
        <img src="/images/banners/small/gangverse.png" alt="rewards" width={30} height={30}  />
        </StyledChainIcon>
      ),
      background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%), rgb(233, 30, 99)',
      iconWidth: '26px',
    },
    {
      key: 'Yurosako',
      component: (
        <StyledChainIcon>
        <img src="/images/banners/small/yurosako.png" alt="rewards" width={30} height={30}  />
        </StyledChainIcon>
      ),
      background: '#17BA92',
      iconWidth: '22px',
    },
    {
      key: 'Ballies',
      component: (
        <StyledChainIcon>
        <img src="/images/banners/small/ballies.png" alt="rewards" width={30} height={30}  />
        </StyledChainIcon>
      ),
      background: '#627AD8',
      iconWidth: '16px',
    },
    {
      key: 'Loaded Lions',
      component: (
        <StyledChainIcon>
        <img src="/images/banners/small/lions.png" alt="rewards" width={30} height={30}  />
        </StyledChainIcon>
      ),
      background: 'rgb(174, 92, 243)',
      iconWidth: '24px',
    },
    {
      key: 'AlphaBot',
      component: (
        <StyledChainIcon>
        <img src="/images/banners/small/alphabot.png" alt="rewards" width={30} height={30}  />
        </StyledChainIcon>
      ),
      background: 'rgb(95, 107, 230)',
      iconWidth: '26px',
    },
    {
      key: 'Cyber Cubs',
      component: (
        <StyledChainIcon>
        <img src="/images/banners/small/cyber.png" alt="rewards" width={30} height={30}  />
        </StyledChainIcon>
      ),
      background: 'rgb(78, 141, 228)',
      iconWidth: '20px',
    },
    
  ]
  
  export const ChainTags: React.FC = () => {
    const { isMobile } = useMatchBreakpoints()
    return (
      <StyledMarquee>
        {newsItems.map((d) => (
          <TagWrapper style={{ background: d.background }} key={d.key}>
            {cloneElement(d.component, { width: d.iconWidth, color: 'invertedContrast' })}
            <Text fontWeight={600} fontSize={isMobile ? '16px' : '20px'} ml="10px" color="invertedContrast">
              {d.key}
            </Text>
          </TagWrapper>
        ))}
      </StyledMarquee>
    )
  }