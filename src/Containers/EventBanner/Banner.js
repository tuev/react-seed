import React, {
  useCallback,
  useMemo,
  useState,
  useRef,
  createContext,
  useEffect
} from 'react'
import Slider from 'react-slick'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { get, uniqBy } from 'lodash'

import { requestEventBannerHandler } from 'Redux/Banner/banner.action'
import { faPauseCircle, faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import bannerConfig from './config'
import BannerItem from './Item'
import './banner.scss'
import BannerPlaceHolder from './Placeholder'

export const BannerContext = createContext(null)

const AppBanner = () => {
  const dispatch = useDispatch()
  const bannerRef = useRef(null)
  const [isPlay, togglePlay] = useState(false)
  const playIcon = useMemo(() => (isPlay ? faPauseCircle : faPlayCircle), [
    isPlay
  ])
  const _onPlay = useCallback(bannerRef.slickPlay, [])
  const _onPause = useCallback(bannerRef.slickPause, [])
  const _togglePlay = useCallback(() => togglePlay(!isPlay), [isPlay])
  useEffect(
    () => {
      if (bannerRef.current) {
        isPlay ? bannerRef.current.slickPlay() : bannerRef.current.slickPause()
      }
    },
    [_onPause, _onPlay, isPlay]
  )

  useEffect(
    () => {
      async function getEvent () {
        dispatch(requestEventBannerHandler({ endpoint: 'event' }))
      }
      getEvent()
    },
    [dispatch]
  )
  const bannerItems = useSelector(state => get(state, 'banner.items'))
  const isFetching = useSelector(state => get(state, 'banner.isFetching'))
  const items = useMemo(() => uniqBy(bannerItems, 'banner'), [bannerItems])
  const renderBannerItem = useMemo(
    () => items.map(item => <BannerItem key={item._id} {...item} />),
    [items]
  )

  return isFetching ? (
    <BannerPlaceHolder />
  ) : (
    <BannerContext.Provider value={bannerRef}>
      <div className='banner position-relative'>
        <Slider ref={bannerRef} {...bannerConfig}>
          {renderBannerItem}
        </Slider>
        <div
          className='banner-button d-flex justify-content-center align-items-center'
          onClick={_togglePlay}
        >
          <FontAwesomeIcon icon={playIcon} />
        </div>
      </div>
    </BannerContext.Provider>
  )
}

export default AppBanner
