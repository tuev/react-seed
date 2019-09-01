import * as eventBannerActionType from './actionType'

const initState = {
  items: [],
  isFetching: true,
  error: false
}

const eventBannerReducer = (state = initState, action = {}) => {
  switch (action.type) {
  case eventBannerActionType.EVENT_SLIDER_FAILURE:
    return {
      ...state,
      isFetching: false,
      error: true
    }
  case eventBannerActionType.EVENT_SLIDER_REQUEST:
    return {
      ...state,
      isFetching: true,
      error: false
    }
  case eventBannerActionType.EVENT_SLIDER_SUCCESS:
    return {
      ...state,
      isFetching: false,
      items: action.data
    }
  default:
    return state
  }
}

export default eventBannerReducer
