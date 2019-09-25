import React, { useMemo } from 'react'
import { get } from 'lodash'

const BannerItem = ({ image = '', alt = '', banner = '' } = {}) => {
  const url = useMemo(() => get(banner, 'url'), [banner])
  return (
    <div
      style={{
        width: '100%',
        height: 300,
        backgroundImage: `url(${url})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    />
  )
}

export default BannerItem
