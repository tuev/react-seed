import * as actionTypes from './slider.actionTypes'

export const toggleSliderPlay = isPlay => ({
  type: actionTypes.TOGGLE_PLAY,
  payload: isPlay
})

export const initSlider = slider => ({
  type: actionTypes.INIT_SLIDER,
  payload: slider
})

export const slickGoTo = index => ({
  type: actionTypes.SLICKGOTO,
  payload: index
})
