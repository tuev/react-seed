import { TOGGLE_PLAY, INIT_SLIDER, SLICKGOTO } from './slider.actionTypes'

export const toggleSliderPlay = isPlay => ({
  type: TOGGLE_PLAY,
  payload: isPlay
})

export const initSlider = slider => ({
  type: INIT_SLIDER,
  payload: slider
})

export const slickGoTo = index => ({
  type: SLICKGOTO,
  payload: index
})
