import { combineReducers } from 'redux'
import event from './EventList/event.reducer'
import eventSlider from './EventSlider/slider.reducer'

const appReducer = combineReducers({ event, eventSlider })

export default appReducer
