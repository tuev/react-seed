import { combineReducers } from 'redux'
import * as actionTypes from './actionType'
import initEventState from './event.store'

// Updates error message to notify about the failed fetches.
const errorMessage = (state = null, action) => {
  const { type, error } = action

  if (type.includes(actionTypes.RESET_ERROR_MESSAGE)) {
    return null
  } else if (error) {
    return error
  }

  return state
}

// Event State
const eventData = (state = initEventState, action) => {
  switch (action.type) {
  case actionTypes.EVENT_REQUEST:
    return {
      ...state,
      data: [],
      isLoading: true,
      isLoadSuccess: false,
      isLoadError: false
    }
  case actionTypes.EVENT_SUCCESS:
    return {
      ...state,
      data: action.payload,
      isLoading: false,
      isLoadSuccess: true,
      isLoadError: false
    }
  case actionTypes.EVENT_FAILURE:
    return {
      ...state,
      isLoading: false,
      isLoadSuccess: false,
      isLoadError: true
    }
  default:
    return state
  }
}

const eventReducers = combineReducers({
  eventData,
  errorMessage
})

export default eventReducers
