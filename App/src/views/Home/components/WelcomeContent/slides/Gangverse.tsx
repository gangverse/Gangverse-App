/** @jsxImportSource theme-ui */
import React from 'react'
import Link from 'next/link'
import { styles } from './styles'
import { Button, Flex, Text } from '@pancakeswap/uikit'
import { Box, Image } from 'theme-ui'

const Gangverse = () => {

  return (
    <Flex sx={styles.slideContainer}>
      <Flex sx={styles.slideContent}>
        <Text sx={{ ...styles.slideTitle, fontSize: ['43px', '38px', '64px'] }}>
          {'Welcome to Gangverse'}
        </Text>
        <Text sx={styles.slideSubtitle}>
          {'Unique NFT collections, highly profitable NFT Staking and exclusive Airdrops!'}
        </Text>
        <Flex sx={{ alignItems: 'center', marginTop: ['25px', '25px', '0px'] }}>
          <Text sx={styles.availableOn}>{'AVAILABLE ON'}</Text>
          <Link href="https://minted.network/collections/cronos/0xabaa122b9e6b64fcbdd55a03eeb8729220f9c589" target="_blank">
          <img 
          src="/images/banners/logo/minted.png" alt="minted.network" width={20} height={20} 
          sx={{ marginRight: '10px', cursor: 'pointer' }}
          />
          </Link>
          <Link href="https://crypto.com/nft/collection/674c88b39488037cb63471dd2a9c263f?tab=items" target="_blank">
          <img 
          src="/images/banners/logo/cronos.png" alt="crypto.com" width={20} height={20} 
          sx={{ marginRight: '10px', cursor: 'pointer' }}
          />
          </Link>
          <Link href="https://app.ebisusbay.com/collection/gangverse-social-club" target="_blank">
          <img 
          src="/images/banners/logo/ebisus.png" alt="ebisus" width={20} height={20} 
          sx={{ marginRight: '10px', cursor: 'pointer' }}
          />
          </Link>
        </Flex>
        <Link href="https://gangverse.club">
          <Flex sx={styles.billImage}>
            <Box sx={{ ...styles.image, backgroundImage: `url('/images/banners/top/4.png')` }} />
          </Flex>
        </Link>
        <Flex sx={styles.buttonContainer}>
          <Button
   
            sx={{ ...styles.learnMoreButton }}
            onClick={() =>
              window.open(
                '/nfts/collections',
                '_blank',
              )
            }
          >
            {'Mint NFT'}
          </Button>
          <Button
            sx={{ fontSize: ['14px', '14px', '16px'], minWidth: ['140px', '140px'] }}
            onClick={() => window.open('/gangverse-nft-staking')}
          >
            {'Stake NFT'}
          </Button>
        </Flex>
      </Flex>
      <Flex sx={{ width: ['0', '100%'], justifyContent: 'center' }}>
        <Flex
          sx={{ ...styles.imageWrapper, background: 'none' }}
          onClick={() => window.open('https://gangverse.club')}
        >
          <Image src={`/images/banners/top/4.png`} sx={styles.image} />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Gangverse
