import { useRef, useEffect } from 'react'

const useOnOutsideClick = handleOutsideClick => {
  const innerBorderRef = useRef()

  const onClick = event => {
    // console.log(innerBorderRef.current, event)
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
    // eslint-disable-next-line
  }, []) // []: render 1 time ~ ComponentDidMount

  return { innerBorderRef }
}

export default useOnOutsideClick
