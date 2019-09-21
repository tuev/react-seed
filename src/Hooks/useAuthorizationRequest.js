import { useSelector, useDispatch } from 'react-redux'
import { get } from 'lodash'
import useEventCallback from './useEventCallback'

const useAuthorizationRequest = (action, params = {}, options = {}) => {
  const dispatch = useDispatch()
  const token = useSelector(state => get(state, ['profile', 'data', 'token']))
  const { callback, errorHandler } = options

  const eventCallback = useEventCallback(() => {
    const _handleSubmit = async () => {
      try {
        const result = await dispatch(action({ ...params, token }))
        callback && callback(result)
      } catch (error) {
        console.error(error, 'errrorr')
        errorHandler && errorHandler(error)
      }
    }

    _handleSubmit()
  })

  return [eventCallback, dispatch]
}

export default useAuthorizationRequest
