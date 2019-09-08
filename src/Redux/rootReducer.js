import { combineReducers } from 'redux'
import event from './Event/event.reducer'
import banner from './Banner/banner.reducer'
import user from './User/user.reducer'
import eventDetail from './EventDetail/eventDetail.reducer'
import profileReducer from './Profile/profile.reducer'
import eventCreateReducer from './EventCreate/eventCreate.reducer'

const appReducer = combineReducers({
  event,
  banner,
  user,
  eventDetail,
  profile: profileReducer,
  eventCreate: eventCreateReducer
})

export default appReducer
