import initSliderStore from './slider.store'
import * as actionTypes from './slider.actionTypes'

const SliderReducer = (state = initSliderStore, action) => {
  switch (action.type) {
  case actionTypes.TOGGLE_PLAY:
    const play = slider => slider.slickPlay()
    const pause = slider => slider.slickPause()
    state.isPlay ? pause(state.slider) : play(state.slider)
    return { ...state, isPlay: !state.isPlay }
  case actionTypes.INIT_SLIDER:
    return { ...state, slider: action.payload }
  case actionTypes.SLICKGOTO:
    const _goToIndex = (slider, index) => slider.slickGoTo(index, true)
    _goToIndex(state.slider, action.payload)
    return { ...state }
  default:
    return state
  }
}

export default SliderReducer
