import React, { useMemo } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPauseCircle, faPlayCircle } from '@fortawesome/free-solid-svg-icons'

const BannerControl = ({ isPlay }) => {
  const icon = useMemo(() => (isPlay ? faPauseCircle : faPlayCircle), [isPlay])
  return (
    <div
      className='banner-button d-flex justify-content-center align-items-center'
      // onClick={handlePlay}
    >
      <FontAwesomeIcon icon={icon} />
    </div>
  )
}

export default BannerControl
