import React, { useContext, useCallback, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { get, uniqBy } from 'lodash'
import { BannerContext } from './Banner'

const BannerCustomPaging = ({ index }) => {
  const bannerRef = useContext(BannerContext)
  const bannerItems = useSelector(state => get(state, 'banner.items', []))
  const _slickToGo = useCallback(
    () => {
      const banner = bannerRef.current
      banner.slickGoTo(index)
    },
    [index, bannerRef]
  )
  const items = useMemo(() => uniqBy(bannerItems, 'banner'), [bannerItems])
  return (
    <div
      className='banner-custom-paging__image'
      style={{
        backgroundImage: `url(${get(items, [index, 'banner'], '')})`
      }}
      onMouseEnter={_slickToGo}
      onClick={_slickToGo}
    />
  )
}

export default BannerCustomPaging
