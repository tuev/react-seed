import moment from 'moment'
import { get } from 'lodash'
import * as actionTypes from './actionType'

const initState = {
  data: {
    name: '',
    type: 'tour',
    category: 'charity',
    organizer: '',
    addressType: 'revenue',
    address: '',
    timeStart: new Date(),
    timeEnd: moment()
      .add('1', 'y')
      .toDate()
  },
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
      error: action.error || true,
      isFetching: false
    }
  case actionTypes.EVENT_CREATE_SUCCESS:
    return {
      ...state,
      isFetching: false,
      error: false,
      data
    }
  case actionTypes.EVENT_CREATE_CHANGE:
    return {
      ...state,
      data: {
        ...state.data,
        ...action.payload
      }
    }
  case actionTypes.EVENT_CREATE_CLEAR_ERROR:
    return {
      ...state,
      error: false
    }
  default:
    return state
  }
}

export default eventCreateReducer
