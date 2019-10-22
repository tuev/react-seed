import { merge } from 'lodash'
import { REQUEST_API } from 'Middlewares/api'
import * as actionTypes from './actionType'

const defaultFieldSelect = [
  '_id',
  'address',
  'timeStart',
  'timeEnd',
  'name',
  'status'
]

export const defaultOptions = {
  params: {
    limit: process.env.REACT_APP_PAGE_LIMIT,
    skip: 0,
    select: JSON.stringify(defaultFieldSelect),
    populate: JSON.stringify([{ path: 'author' }, { path: 'banner' }]),
    sort: 'createdAt'
  }
}

// Relies on the custom API middleware defined in Middleware/api.js.
const requestEventHandler = ({
  options = {},
  endpoint = 'event',
  token
} = {}) => {
  return {
    [REQUEST_API]: {
      types: [
        actionTypes.EVENT_REQUEST,
        actionTypes.EVENT_SUCCESS,
        actionTypes.EVENT_FAILURE
      ],
      endpoint,
      headers: { Authorization: `Bearer ${token}` },
      options: merge(defaultOptions, options)
    }
  }
}

const searchEvent = ({ type, value }) => ({
  type: actionTypes.EVENT_SEARCH,
  payload: { type, value }
})

export { requestEventHandler, searchEvent }
