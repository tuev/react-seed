import { combineReducers } from 'redux'
import slider from './Slider/slider.reducer'
import eventDetail from './EventDetail/eventDetail.reducer'

const appReducer = combineReducers({ sliderData: slider, eventDetail })

export default appReducer
