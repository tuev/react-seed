import { combineReducers } from 'redux'
import event from './EventList/event.reducer'

const appReducer = combineReducers({ event })

export default appReducer
