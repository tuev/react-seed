import { combineReducers } from 'redux'
import event from './Event/event.reducer'

const appReducer = combineReducers({ event })

export default appReducer
