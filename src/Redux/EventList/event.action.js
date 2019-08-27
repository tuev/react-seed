import { REQUEST_API } from 'Middlewares/api'
import * as actionTypes from './actionType'

// Relies on the custom API middleware defined in Middleware/api.js.
const requestEventHandler = ({
  options = { params: { limit: process.env.REACT_APP_PAGE_LIMIT, skip: 0 } },
  endpoint = ''
}) => ({
  [REQUEST_API]: {
    types: [
      actionTypes.EVENT_REQUEST,
      actionTypes.EVENT_SUCCESS,
      actionTypes.EVENT_FAILURE
    ],
    endpoint,
    options
  }
})

const searchEvent = ({ type, value }) => ({
  type: actionTypes.EVENT_SEARCH,
  payload: { type, value }
})

export { requestEventHandler, searchEvent }
