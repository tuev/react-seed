import React, { useMemo } from 'react'
import useImageUpload from 'Hooks/useImageUpload'
import { useDispatch, useSelector } from 'react-redux'
import { changeEventCreateDataHandler } from 'Redux/EventCreate/eventCreate.action'
import { faImage, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Input, Snackbar } from '@material-ui/core'
import { get } from 'lodash'
import classNames from 'classnames'
import './banner-upload.scss'

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
    get(data, ['url'], data)
  )

  const labelClassname = useMemo(
    () => classNames({ 'label-upload': true, hide: !!data }),
    [data]
  )
  return (
    <>
      <div className='d-flex justify-content-center position-relative p-5'>
        <div style={{ width: 300, minHeight: 150, position: 'relative' }}>
          <FontAwesomeIcon
            icon={faTimesCircle}
            size='2x'
            className='clear-icon'
            onClick={_onClear}
          />
          <img
            ref={imgRef}
            style={{ width: '100%', opacity: data ? 1 : 0 }}
            alt='event banner'
          />
        </div>
      </div>
      <label className={labelClassname} htmlFor='file'>
        <FontAwesomeIcon icon={faImage} size='5x' />
        <Input type='file' id='file' onChange={_handleUpload} />
      </label>
      <Snackbar
        variant='error'
        message={error}
        open={!!error}
        autoHideDuration={4000}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      />
    </>
  )
}

export default BannerUpload
