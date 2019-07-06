import { combineReducers } from 'redux'
import event from './event/event.reducer'

const appReducer = combineReducers({ event })

export default appReducer
