import { REQUEST_API } from 'Middlewares/api'
import * as actionTypes from './actionType'

// Relies on the custom API middleware defined in ../middleware/api.js.
const requestEventHandler = ({ options = {}, endpoint = '' }) => ({
  [REQUEST_API]: {
    types: [
      actionTypes.EVENT_FAILURE,
      actionTypes.EVENT_REQUEST,
      actionTypes.EVENT_SUCCESS
    ],
    endpoint,
    options
  }
})

const requestEvent = ({ endpoint, options = {} }) => {
  return (dispatch, getState) => {
    // console.log(getState(), 'The current state tree of application')
    return dispatch(requestEventHandler({ endpoint, options }))
  }
}

export { requestEvent }
