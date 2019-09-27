import React from 'react'
import useImageUpload from 'Hooks/useImageUpload'
import { useDispatch, useSelector } from 'react-redux'
import { changeEventCreateDataHandler } from 'Redux/EventCreate/eventCreate.action'
import { faImage, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Input, Snackbar } from '@material-ui/core'
import { get } from 'lodash'

const BannerUpload = () => {
  const dispatch = useDispatch()
  const _onChange = data => {
    dispatch(changeEventCreateDataHandler({ data: { banner: data } }))
  }

  const _onClear = () => {
    dispatch(changeEventCreateDataHandler({ data: { banner: '' } }))
  }

  const data = useSelector(state =>
    get(state, ['eventCreate', 'data', 'banner'])
  )
  const [imgRef, _handleUpload, error] = useImageUpload(
    _onChange,
    get(data, ['url'])
  )

  return (
    <>
      <div className='d-flex justify-content-center position-relative p-5'>
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
          <img ref={imgRef} style={{ width: '100%', opacity: data ? 1 : 0 }} />
        </div>
      </div>
      <label
        className='flex-column align-items-center bg-white justify-content-around'
        style={{
          position: 'absolute',
          top: 0,
          zIndex: 2,
          width: '100%',
          minHeight: 150,
          display: data ? 'none' : 'flex',
          padding: 32,
          background: 'white'
        }}
        htmlFor='file'
      >
        <FontAwesomeIcon icon={faImage} size='5x' />
        <Input type='file' id='file' onChange={_handleUpload} />
      </label>
      <Snackbar
        variant='error'
        message={error}
        open={!!error}
        autoHideDuration={4000}
      />
    </>
  )
}

export default BannerUpload
