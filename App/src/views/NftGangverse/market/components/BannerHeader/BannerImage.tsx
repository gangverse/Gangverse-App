import styled from 'styled-components'

const StyledBannerImageWrapper = styled.div`
  ${({ theme }) => `background-color: ${theme.colors.cardBorder}`};
  flex: none;
  position: relative;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #E91E63;
  height: 123px;
  overflow: hidden;

  ${({ theme }) => theme.mediaQueries.sm} {
    height: 192px;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    height: 256px;
  }
`

export default StyledBannerImageWrapper
