import { REQUEST_API } from 'Middlewares/api'
import * as eventSliderActionType from './actionType'

const requestEventSliderHandler = ({
  options = { params: { limit: 10, select: ['_id', 'image', 'banner'] } },
  endpoint = ''
}) => ({
  [REQUEST_API]: {
    types: [
      eventSliderActionType.EVENT_SLIDER_REQUEST,
      eventSliderActionType.EVENT_SLIDER_SUCCESS,
      eventSliderActionType.EVENT_SLIDER_FAILURE
    ],
    endpoint,
    options
  }
})

export { requestEventSliderHandler }
