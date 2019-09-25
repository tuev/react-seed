import React from 'react'
import useImageUpload from 'Hooks/useImageUpload'
import { useDispatch, useSelector } from 'react-redux'
import { changeEventCreateDataHandler } from 'Redux/EventCreate/eventCreate.action'
import { faImage, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Input } from '@material-ui/core'
import { get } from 'lodash'

const BannerUpload = () => {
  const dispatch = useDispatch()
  const _onChange = data => {
    dispatch(changeEventCreateDataHandler({ data: { banner: data } }))
  }

  const _onClear = data => {
    dispatch(changeEventCreateDataHandler({ data: { banner: '' } }))
  }

  const data = useSelector(state =>
    get(state, ['eventCreate', 'data', 'banner', 'url'])
  )

  const [imgRef, _handleUpload] = useImageUpload(_onChange, data)

  return data ? (
    <div className='d-flex justify-content-center'>
      <div style={{ width: 300, height: 400, position: 'relative' }}>
        <FontAwesomeIcon
          icon={faTimesCircle}
          size='2x'
          style={{
            position: 'absolute',
            top: '-15px',
            right: '-15px',
            cursor: 'pointer'
          }}
          onClick={_onClear}
        />
        <img ref={imgRef} style={{ width: '100%' }} />
      </div>
    </div>
  ) : (
    <div className='d-flex flex-column align-items-center'>
      <FontAwesomeIcon icon={faImage} size='5x' />
      <Input type='file' onChange={_handleUpload} />
    </div>
  )
}

export default BannerUpload
