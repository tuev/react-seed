import { REQUEST_API } from 'Middlewares/api'
import * as actionTypes from './actionType'

const requestProfileInfo = ({ options = {}, endpoint = 'user' } = {}) => ({
  [REQUEST_API]: {
    types: [
      actionTypes.PROFILE_REQUEST,
      actionTypes.PROFILE_SUCCESS,
      actionTypes.PROFILE_FAILURE
    ],
    endpoint,
    options
  }
})

const updateProfileInfo = ({ data, endpoint = 'user' } = {}) => ({
  [REQUEST_API]: {
    types: [
      actionTypes.PROFILE_REQUEST,
      actionTypes.PROFILE_SUCCESS,
      actionTypes.PROFILE_FAILURE
    ],
    endpoint,
    method: 'post',
    options: { data }
  }
})

export { requestProfileInfo, updateProfileInfo }
