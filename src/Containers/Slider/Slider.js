import React, {
  useCallback,
  useMemo,
  useState,
  useRef,
  createContext,
  useEffect
} from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPauseCircle, faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import sliderConfig from './SliderConfig'
import sliderData from './slider.json'
import SliderItem from './SliderItem'
import './slider.scss'

export const SliderContext = createContext(null)

const Sliders = () => {
  const sliderRef = useRef(null)
  const [isPlay, togglePlay] = useState(false)
  const playIcon = useMemo(() => (isPlay ? faPauseCircle : faPlayCircle), [
    isPlay
  ])
  const _onPlay = useCallback(sliderRef.slickPlay, [])
  const _onPause = useCallback(sliderRef.slickPause, [])
  const _togglePlay = useCallback(() => togglePlay(!isPlay), [isPlay])
  useEffect(
    () => {
      if (sliderRef.current) {
        isPlay ? sliderRef.current.slickPlay() : sliderRef.current.slickPause()
      }
    },
    [_onPause, _onPlay, isPlay]
  )

  const renderSliderItem = sliderData
    .filter(item => item && item.image)
    .map((item, idx) => <SliderItem key={idx} {...item} />)

  return (
    <SliderContext.Provider
      className='slider position-relative'
      value={sliderRef}
    >
      <Slider ref={sliderRef} {...sliderConfig}>
        {renderSliderItem}
      </Slider>
      <div
        className='slider-button d-flex justify-content-center align-items-center'
        onClick={_togglePlay}
      >
        <FontAwesomeIcon icon={playIcon} />
      </div>
    </SliderContext.Provider>
  )
}

export default Sliders
