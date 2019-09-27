import { useCallback, useRef, useEffect, useState } from 'react'
import { get } from 'lodash'

const useImageUpload = (onChange, initImage) => {
  const imgRef = useRef()
  const [error, toggleError] = useState('')
  useEffect(() => {
    if (get(imgRef, 'current')) {
      imgRef.current.src = initImage
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const types = ['image/png', 'image/jpg', 'image/gif', 'image/jpeg']

  const _handleImageUpload = useCallback(
    e => {
      const data = e.target.files[0]
      const valueEvent = e.target.files
      if (valueEvent.length > 1) {
        const msg = 'Only 1 images can be uploaded at a time'
        toggleError(msg)
        return
      }
      if (!types.includes(data.type)) {
        const msg = `'${data.type}' is not a supported format`
        toggleError(msg)
        return
      }
      if (data.size > 150000) {
        const msg = `'${data.name}' is too large, please pick a smaller file`
        toggleError(msg)
        return
      }

      const file = new FileReader()
      onChange && onChange(data)
      file.readAsDataURL(data)
      file.onloadend = () => {
        imgRef.current.src = file.result
      }
    },
    [onChange, types]
  )

  return [imgRef, _handleImageUpload, error]
}

export default useImageUpload
