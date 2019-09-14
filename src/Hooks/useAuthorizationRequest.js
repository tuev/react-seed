import { useSelector, useDispatch } from 'react-redux'
import { get } from 'lodash'
import useEventCallback from './useEventCallback'

const useAuthorizationRequest = (action, params = {}) => {
  const dispatch = useDispatch()
  const token = useSelector(state => get(state, ['profile', 'data', 'token']))
  const eventCallback = useEventCallback(() => {
    const _handleSubmit = async () => {
      await dispatch(action({ ...params, token }))
    }

    _handleSubmit()
  })

  return [eventCallback, dispatch]
}

export default useAuthorizationRequest
