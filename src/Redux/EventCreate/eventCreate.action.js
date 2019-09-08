import { REQUEST_API } from 'Middlewares/api'
import * as actionTypes from './actionType'

const requestEventCreateHandler = ({ options = {}, id = '' }) => ({
  [REQUEST_API]: {
    types: [
      actionTypes.EVENT_CREATE_REQUEST,
      actionTypes.EVENT_CREATE_SUCCESS,
      actionTypes.EVENT_CREATE_FAILURE
    ],
    endpoint: `event/${id}`,
    options
  }
})

const postEventCreateHandler = ({ options = {} }) => ({
  [REQUEST_API]: {
    types: [
      actionTypes.EVENT_CREATE_REQUEST,
      actionTypes.EVENT_CREATE_SUCCESS,
      actionTypes.EVENT_CREATE_FAILURE
    ],
    endpoint: 'event',
    method: 'post',
    options
  }
})

const updateEventCreateHandler = ({ options = {}, id = '' }) => ({
  [REQUEST_API]: {
    types: [
      actionTypes.EVENT_CREATE_REQUEST,
      actionTypes.EVENT_CREATE_SUCCESS,
      actionTypes.EVENT_CREATE_FAILURE
    ],
    endpoint: `event/${id}`,
    method: 'put',
    options
  }
})

export {
  requestEventCreateHandler,
  postEventCreateHandler,
  updateEventCreateHandler
}
