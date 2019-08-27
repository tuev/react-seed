import { useRef, useCallback, useEffect } from 'react'

const useEventCallback = (fn, dependencies = []) => {
  const ref = useRef(() => {
    throw new Error('Cannot call an event handler while rendering.')
  })

  useEffect(
    () => {
      ref.current = fn
    },
    [fn]
  )

  return useCallback(
    () => {
      const fn = ref.current
      return fn()
    },
    [ref]
  )
}

export default useEventCallback
