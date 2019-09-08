import { get } from 'lodash'
import * as actionTypes from './actionType'

const initState = {
  data: {},
  isFetching: false,
  error: false
}

const eventCreateReducer = (state = initState, action = {}) => {
  const { type, ...restInfo } = action
  const data = get(restInfo, 'data', [])
  switch (action.type) {
  case actionTypes.EVENT_CREATE_REQUEST:
    return {
      ...state,
      isFetching: true,
      error: false
    }
  case actionTypes.EVENT_CREATE_FAILURE:
    return {
      ...state,
      error: true,
      isFetching: false
    }
  case actionTypes.EVENT_CREATE_SUCCESS:
    return {
      ...state,
      isFetching: false,
      error: false,
      data
    }
  default:
    return state
  }
}

export default eventCreateReducer
