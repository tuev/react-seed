import { REQUEST_API } from 'Middlewares/api'
import * as actionTypes from './actionType'

const requestEventDetailHandler = ({ options = {}, id = '' }) => ({
  [REQUEST_API]: {
    types: [
      actionTypes.EVENT_DETAIL_REQUEST,
      actionTypes.EVENT_DETAIL_SUCCESS,
      actionTypes.EVENT_DETAIL_FAILURE
    ],
    endpoint: `event/${id}`,
    options
  }
})

export { requestEventDetailHandler }
