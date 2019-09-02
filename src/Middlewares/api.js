import axios from 'axios'
import { isArray, isString } from 'lodash'

const SERVER_BASE_URL = process.env.REACT_APP_SERVER_URL || 'tesr'

// Fetches an API response
const callApi = async (endpoint, options = {}, method = 'get') => {
  const fullUrl = `${SERVER_BASE_URL}/${endpoint}`
  const result = await axios({
    method,
    url: fullUrl,
    ...options
  })
  return result
}

export const REQUEST_API = 'REQUEST_API'

// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.

export default store => next => async action => {
  const requestAPI = action[REQUEST_API]
  if (!requestAPI) {
    return next(action)
  }

  const { endpoint, types, options = {}, method = 'get' } = requestAPI
  // Expect type of requestApi action consist of: start fetch action, get success action, get fail action
  if (!isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.')
  }
  if (!types.every(type => isString(type))) {
    throw new Error(
      'Expected action types to be strings. And action of this type is valid'
    )
  }

  const actionWith = (data = {}) => {
    const finalAction = {
      ...action,
      ...data
    }
    delete finalAction[REQUEST_API]
    return finalAction
  }

  const [requestType, successType, failureType] = types
  next(actionWith({ type: requestType }))
  try {
    const response = await callApi(endpoint, options, method)
    return next(actionWith({ ...response, type: successType, options }))
  } catch (error) {
    return next(
      actionWith({
        error: error.message || 'Something wrong!!!',
        type: failureType
      })
    )
  }
}
