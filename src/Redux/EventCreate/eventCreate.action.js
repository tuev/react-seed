import { merge } from 'lodash'
import { REQUEST_API } from 'Middlewares/api'
import * as actionTypes from './actionType'

const defaultOptions = { params: { populate: 'author' } }

const requestEventCreateHandler = ({ options = {}, id = '', token } = {}) => ({
  [REQUEST_API]: {
    types: [
      actionTypes.EVENT_CREATE_REQUEST,
      actionTypes.EVENT_CREATE_SUCCESS,
      actionTypes.EVENT_CREATE_FAILURE
    ],
    endpoint: `event/${id}`,
    headers: { Authorization: `Bearer ${token}` },
    options: merge(defaultOptions, options)
  }
})

const postEventCreateHandler = ({ options = {}, token } = {}) => ({
  [REQUEST_API]: {
    types: [
      actionTypes.EVENT_CREATE_REQUEST,
      actionTypes.EVENT_CREATE_SUCCESS,
      actionTypes.EVENT_CREATE_FAILURE
    ],
    endpoint: 'event',
    method: 'post',
    headers: { Authorization: `Bearer ${token}` },
    options: merge(defaultOptions, options)
  }
})

const updateEventCreateHandler = ({ options = {}, id = '', token }) => ({
  [REQUEST_API]: {
    types: [
      actionTypes.EVENT_CREATE_REQUEST,
      actionTypes.EVENT_CREATE_SUCCESS,
      actionTypes.EVENT_CREATE_FAILURE
    ],
    endpoint: `event/${id}`,
    method: 'put',
    headers: { Authorization: `Bearer ${token}` },
    options: merge(defaultOptions, options)
  }
})

const changeEventCreateDataHandler = ({ data }) => ({
  type: actionTypes.EVENT_CREATE_CHANGE,
  payload: data
})

const clearError = () => ({ type: actionTypes.EVENT_CREATE_CLEAR_ERROR })

export {
  requestEventCreateHandler,
  postEventCreateHandler,
  updateEventCreateHandler,
  changeEventCreateDataHandler,
  clearError
}
