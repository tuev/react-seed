import { combineReducers } from 'redux'
import eventReducer from './reducers/event/event.reducer'

const appReducer = combineReducers({ event: eventReducer })

export default appReducer
