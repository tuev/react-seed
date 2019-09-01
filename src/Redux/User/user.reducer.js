import paginate from 'Redux/Utils/paginate'
import { combineReducers } from 'redux'
import * as actionTypes from './actionType'

// Updates error message to notify about the failed fetches.
const errorMessage = (state = null, action = {}) => {
  const { type, error } = action

  if (type === actionTypes.RESET_ERROR_MESSAGE) {
    return null
  } else if (error) {
    return error
  }

  return state
}

const search = (state = {}, action = {}) => {
  const { type, payload = {} } = action
  const { type: searchType, value } = payload
  if (type === actionTypes.EVENT_MEMBER_SEARCH) {
    return {
      ...state,
      [searchType]: value
    }
  }

  return state
}

// Updates the pagination data for different actions.
const data = paginate({
  types: [
    actionTypes.EVENT_MEMBER_REQUEST,
    actionTypes.EVENT_MEMBER_SUCCESS,
    actionTypes.EVENT_MEMBER_FAILURE
  ]
})

const userReducers = combineReducers({
  data,
  errorMessage,
  search
})

export default userReducers
