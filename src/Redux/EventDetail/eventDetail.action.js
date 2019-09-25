import { REQUEST_API } from 'Middlewares/api'
import { merge } from 'lodash'
import * as actionTypes from './actionType'

const defaultOptions = {
  params: {
    populate: JSON.stringify([{ path: 'author' }, { path: 'banner' }])
  }
}

const requestEventDetailHandler = ({ options = {}, id = '' }) => ({
  [REQUEST_API]: {
    types: [
      actionTypes.EVENT_DETAIL_REQUEST,
      actionTypes.EVENT_DETAIL_SUCCESS,
      actionTypes.EVENT_DETAIL_FAILURE
    ],
    endpoint: `event/${id}`,
    options: merge(defaultOptions, options)
  }
})

export { requestEventDetailHandler }
