import paginate from 'Redux/utils/paginate'
import { combineReducers } from 'redux'
import * as actionTypes from './actionType'

// Updates error message to notify about the failed fetches.
const errorMessage = (state = null, action) => {
  const { type, error } = action

  if (type === actionTypes.RESET_ERROR_MESSAGE) {
    return null
  } else if (error) {
    return error
  }

  return state
}

// Updates the pagination data for different actions.
const eventData = paginate({
  mapActionToKey: () => '',
  types: [
    actionTypes.EVENT_REQUEST,
    actionTypes.EVENT_SUCCESS,
    actionTypes.EVENT_FAILURE
  ]
})

const eventReducers = combineReducers({
  eventData,
  errorMessage
})

export default eventReducers
