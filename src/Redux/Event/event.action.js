import { merge } from 'lodash'
import { REQUEST_API } from 'Middlewares/api'
import * as actionTypes from './actionType'

const defaultFieldSelect = [
  '_id',
  'image',
  'date',
  'author',
  'price',
  'location',
  'name'
]

const defaultOptions = {
  params: {
    limit: process.env.REACT_APP_PAGE_LIMIT,
    skip: 0,
    select: JSON.stringify(defaultFieldSelect)
  }
}

// Relies on the custom API middleware defined in Middleware/api.js.
const requestEventHandler = ({ options = {}, endpoint = 'event' } = {}) => ({
  [REQUEST_API]: {
    types: [
      actionTypes.EVENT_REQUEST,
      actionTypes.EVENT_SUCCESS,
      actionTypes.EVENT_FAILURE
    ],
    endpoint,
    options: merge(defaultOptions, options)
  }
})

const searchEvent = ({ type, value }) => ({
  type: actionTypes.EVENT_SEARCH,
  payload: { type, value }
})

export { requestEventHandler, searchEvent }
