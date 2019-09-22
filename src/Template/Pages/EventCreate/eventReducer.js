import { EVENT_CHANGE } from './eventActionType'

const reducer = (state, action) => {
  switch (action.type) {
  case EVENT_CHANGE:
    return {
      ...state,
      ...action.payload
    }
  default:
    return state
  }
}

export default reducer
