/** @jsxImportSource theme-ui */
import React, { useState } from 'react'
import { Flex } from '@pancakeswap/uikit'
import { styles } from './styles'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import useSwiper from 'hooks/useSwiper'
import SwiperCore from 'swiper'
import { getDotPos } from 'utils/getDotPos'
import { Bubble } from '../News/styles'
import Gangverse from './slides/Gangverse'

const slides = [<Gangverse key={0} />]

const WelcomeContent: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const { swiper, setSwiper } = useSwiper()

  const handleSlide = (event: SwiperCore) => {
    const slideNumber = getDotPos(event.activeIndex, 2)
    setActiveSlide(slideNumber)
  }

  const slideTo = (index: number) => {
    setActiveSlide(index)
    swiper.slideTo(index)
  }

  return (
    <Flex sx={styles.mainContainer}>
      <Flex sx={styles.centeredContainer}>
        <Flex sx={styles.slideContainer}>
          {slides.length > 1 ? (
            <Flex sx={{ flexDirection: 'column', alignItems: 'center' }}>
              <Swiper
                id="homeSwiper"
                autoplay={{
                  delay: 15000,
                  disableOnInteraction: false,
                }}
                onSwiper={setSwiper}
                slidesPerView="auto"
                centeredSlides
                lazy
                preloadImages={false}
                onSlideChange={handleSlide}
                style={{ width: '100%' }}
              >
                {slides.map((slide, index) => {
                  return (
                    <SwiperSlide
                      style={{
                        width: '100%',
                        padding: '1px',
                        height: 'fit-content',
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                      key={index}
                    >
                      {slide}
                    </SwiperSlide>
                  )
                })}
              </Swiper>
              <Flex
                sx={{
                  position: 'relative',
                  width: '95vw',
                  maxWidth: '1412px',
                  justifyContent: ['center', 'flex-start', 'flex-start'],
                }}
              >
                <Flex sx={styles.bubbleContainer}>
                  {[...Array(slides.length)].map((_, i) => {
                    return <Bubble isActive={i === activeSlide} onClick={() => slideTo(i)} key={i} />
                  })}
                </Flex>
              </Flex>
            </Flex>
          ) : (
            slides[0]
          )}
        </Flex>
        <Flex sx={styles.circlesContainer}>
          <Flex sx={styles.yellowShadow} />

        </Flex>
      </Flex>
    </Flex>
  )
}

export default WelcomeContent
