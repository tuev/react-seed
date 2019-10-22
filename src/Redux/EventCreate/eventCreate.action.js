import { merge } from 'lodash'
import { REQUEST_API } from 'Middlewares/api'
import * as actionTypes from './actionType'

const defaultOptions = {
  params: { populate: JSON.stringify([{ path: 'author' }, { path: 'banner' }]) }
}

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
    endpoint: `evt/${id}`,
    method: 'put',
    headers: { Authorization: `Bearer ${token}` },
    options: merge(defaultOptions, options)
  }
})

const deleteEventCreateHandler = ({ options = {}, id = '', token }) => ({
  [REQUEST_API]: {
    types: [
      actionTypes.EVENT_DELETE_REQUEST,
      actionTypes.EVENT_DELETE_SUCCESS,
      actionTypes.EVENT_DELETE_FAILURE
    ],
    endpoint: `evt/${id}`,
    method: 'delete',
    headers: { Authorization: `Bearer ${token}` },
    options: merge(defaultOptions, options)
  }
})

const changeEventCreateDataHandler = ({ data }) => ({
  type: actionTypes.EVENT_CREATE_CHANGE,
  payload: data
})

const clearError = () => ({ type: actionTypes.EVENT_CREATE_CLEAR_ERROR })
const clearData = () => ({ type: actionTypes.EVENT_CREATE_CLEAR })

export {
  requestEventCreateHandler,
  postEventCreateHandler,
  updateEventCreateHandler,
  changeEventCreateDataHandler,
  deleteEventCreateHandler,
  clearError,
  clearData
}
