import axios from 'axios'
import * as actionTypes from './actionType'

export const getData = () => ({
  type: actionTypes.EVENT_REQUEST
})

export const getDataResetError = () => ({
  type: actionTypes.RESET_ERROR_MESSAGE
})

export const getDataSuccess = data => ({
  type: actionTypes.EVENT_SUCCESS,
  payload: data
})

export const getDataFailure = error => ({
  type: actionTypes.EVENT_FAILURE,
  error: error.message
})

export const requestEvent = ({ endpoint = '', option = {} }) => {
  return async dispatch => {
    try {
      dispatch(getData())
      dispatch(getDataResetError())
      const response = await axios.get(endpoint)
      dispatch(getDataSuccess(response))
    } catch (error) {
      dispatch(getDataFailure(error))
    }
  }
}
