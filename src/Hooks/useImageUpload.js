import { useCallback, useRef, useEffect } from 'react'

const useImageUpload = (onChange, initImage) => {
  const imgRef = useRef(null)
  useEffect(() => {
    imgRef.current.src = initImage
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const _handleImageUpload = useCallback(
    e => {
      const file = new FileReader()
      onChange && onChange(e.target.files[0])
      file.readAsDataURL(e.target.files[0])
      file.onloadend = function () {
        imgRef.current.src = file.result
      }
    },
    [onChange]
  )

  return [imgRef, _handleImageUpload]
}

export default useImageUpload
