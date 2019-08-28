import * as eventSliderActionType from './actionType'

const initState = {
  items: [],
  isFetching: true,
  error: false
}

const eventSliderReducer = (state = initState, action = {}) => {
  switch (action.type) {
  case eventSliderActionType.EVENT_SLIDER_FAILURE:
    return {
      ...state,
      isFetching: false,
      error: true
    }
  case eventSliderActionType.EVENT_SLIDER_REQUEST:
    return {
      ...state,
      isFetching: true,
      error: false
    }
  case eventSliderActionType.EVENT_SLIDER_SUCCESS:
    return {
      ...state,
      isFetching: false,
      items: action.data
    }
  default:
    return state
  }
}

export default eventSliderReducer
