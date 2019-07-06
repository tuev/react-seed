import { REQUEST_API } from 'Middlewares/api'
import * as actionTypes from './actionType'

// Relies on the custom API middleware defined in Middleware/api.js.
const requestEventHandler = ({ options = {}, endpoint = '' }) => ({
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

const requestEvent = ({ endpoint, options = {} }) => (dispatch, getState) => {
  console.log(getState(), 'The current state tree of application')
  return dispatch(requestEventHandler({ endpoint, options }))
}

export { requestEvent }
