import { REQUEST_API } from 'Middlewares/api'
import { merge } from 'lodash'
import * as eventBannerActionType from './actionType'

const defaultFieldSelect = ['_id', 'image', 'banner']

const defaultOption = {
  params: { limit: 10, select: JSON.stringify(defaultFieldSelect) }
}

const requestEventBannerHandler = ({ options = {}, endpoint = '' }) => ({
  [REQUEST_API]: {
    types: [
      eventBannerActionType.EVENT_SLIDER_REQUEST,
      eventBannerActionType.EVENT_SLIDER_SUCCESS,
      eventBannerActionType.EVENT_SLIDER_FAILURE
    ],
    endpoint,
    options: merge(defaultOption, options)
  }
})

export { requestEventBannerHandler }
