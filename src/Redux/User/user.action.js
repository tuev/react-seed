import { merge } from 'lodash'
import { REQUEST_API } from 'Middlewares/api'
import * as actionTypes from './actionType'

const defaultFieldSelect = ['_id', 'image', 'name']

const defaultOptions = {
  params: {
    limit: process.env.REACT_APP_PAGE_LIMIT,
    skip: 0,
    select: JSON.stringify(defaultFieldSelect)
  }
}

// Relies on the custom API middleware defined in Middleware/api.js.
const requestUserHandler = ({ options = {}, endpoint = 'user' } = {}) => ({
  [REQUEST_API]: {
    types: [
      actionTypes.EVENT_MEMBER_REQUEST,
      actionTypes.EVENT_MEMBER_SUCCESS,
      actionTypes.EVENT_MEMBER_FAILURE
    ],
    endpoint,
    options: merge(defaultOptions, options)
  }
})

const searchEvent = ({ type, value }) => ({
  type: actionTypes.EVENT_MEMBER_SEARCH,
  payload: { type, value }
})

export { requestUserHandler, searchEvent }
