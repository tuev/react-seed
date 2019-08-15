import { combineReducers } from 'redux'
import slider from './Slider/slider.reducer'
import eventReducer from './Event/event.reducer'

const appReducer = combineReducers({
  sliderData: slider,
  events: eventReducer
})

export default appReducer
