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
import { useDispatch, useSelector } from 'react-redux'
import { get, uniqBy } from 'lodash'

import { requestEventSliderHandler } from 'Redux/EventSlider/slider.action'
import { faPauseCircle, faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import sliderConfig from './config'
import SliderItem from './Item'
import './slider.scss'
import SliderPlaceHolder from './Placeholder'

export const SliderContext = createContext(null)

const Sliders = () => {
  const dispatch = useDispatch()
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

  useEffect(
    () => {
      async function getEvent () {
        dispatch(requestEventSliderHandler({ endpoint: 'event' }))
      }
      getEvent()
    },
    [dispatch]
  )
  const sliderItems = useSelector(state => get(state, 'eventSlider.items'))
  const isFetching = useSelector(state => get(state, 'eventSlider.isFetching'))
  const items = useMemo(() => uniqBy(sliderItems, 'banner'), [sliderItems])
  const renderSliderItem = items.map(item => (
    <SliderItem key={item._id} {...item} />
  ))

  return isFetching ? (
    <SliderPlaceHolder />
  ) : (
    <SliderContext.Provider value={sliderRef}>
      <div className='slider position-relative'>
        <Slider ref={sliderRef} {...sliderConfig}>
          {renderSliderItem}
        </Slider>
        <div
          className='slider-button d-flex justify-content-center align-items-center'
          onClick={_togglePlay}
        >
          <FontAwesomeIcon icon={playIcon} />
        </div>
      </div>
    </SliderContext.Provider>
  )
}

export default Sliders
