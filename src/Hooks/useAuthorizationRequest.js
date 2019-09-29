import { useSelector, useDispatch } from 'react-redux'
import { get, merge } from 'lodash'
import useEventCallback from './useEventCallback'

const useAuthorizationRequest = (action, params = {}, options = {}) => {
  const dispatch = useDispatch()
  const token = useSelector(state => get(state, ['profile', 'data', 'token']))
  const authorId = useSelector(state => get(state, ['profile', 'data', '_id']))

  const { callback, errorHandler, author = false } = options
  const extraParams = {
    token,
    options: merge(
      get(params, 'options', {}),
      author ? { params: { query: { author: authorId } } } : {}
    )
  }
  console.log(extraParams, 'extraPamras')
  const eventCallback = useEventCallback(() => {
    const _handleSubmit = async () => {
      try {
        const result = await dispatch(action({ ...params, ...extraParams }))
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
