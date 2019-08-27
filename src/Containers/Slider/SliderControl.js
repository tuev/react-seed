import React, { useMemo } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPauseCircle, faPlayCircle } from '@fortawesome/free-solid-svg-icons'

const SliderControl = ({ isPlay }) => {
  const icon = useMemo(() => (isPlay ? faPauseCircle : faPlayCircle), [isPlay])
  return (
    <div
      className='slider-button d-flex justify-content-center align-items-center'
      onClick={this._togglePlay}
    >
      <FontAwesomeIcon icon={icon} />
    </div>
  )
}

export default SliderControl
