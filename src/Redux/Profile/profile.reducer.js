import { merge } from 'lodash'
import * as actionType from './actionType'

const initState = {
  isFetching: false,
  data: {},
  error: false
}

export const profileReducer = (state = initState, action = {}) => {
  switch (action.type) {
  case actionType.PROFILE_FAILURE:
    return { ...state, error: action.error, isFetching: false }

  case actionType.PROFILE_REQUEST:
    return { ...state, isFetching: true, error: false }
  case actionType.PROFILE_SUCCESS:
    return {
      ...state,
      error: false,
      isFetching: false,
      data: merge(state.data, action.payload)
    }
  default:
    return state
  }
}

export default profileReducer
