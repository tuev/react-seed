import { combineReducers } from 'redux'
import slider from './Slider/slider.reducer'

const appReducer = combineReducers({ sliderData: slider })

export default appReducer
