import { useRef, useEffect } from 'react'

const useOnOutsideClick = handleOutsideClick => {
  const innerBorderRef = useRef()

  const onClick = event => {
    if (
      innerBorderRef.current &&
      !innerBorderRef.current.contains(event.target)
    ) {
      handleOutsideClick()
    }
  }

  useEffect(() => {
    // almost same as componentDidMount
    document.addEventListener('click', onClick, true)
    return () => {
      // almost same as componentWillUnmount
      document.removeEventListener('click', onClick, true)
    }
  }, []) // []: render 1 time ~ ComponentDidMount

  return { innerBorderRef }
}

export default useOnOutsideClick
