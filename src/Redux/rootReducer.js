import { combineReducers } from 'redux'
import eventReducer from './Event/event.reducer'

const appReducer = combineReducers({
  events: eventReducer
})

export default appReducer
