import { combineReducers } from 'redux'
import event from './Event/event.reducer'
import banner from './Banner/banner.reducer'
import user from './User/user.reducer'
import eventDetail from './EventDetail/eventDetail.reducer'

const appReducer = combineReducers({ event, banner, user, eventDetail })

export default appReducer
