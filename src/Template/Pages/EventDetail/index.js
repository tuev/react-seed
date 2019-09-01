import React, { useEffect } from 'react'
import EventDetail from 'Containers/EventDetail'
import Placeholder from 'Containers/EventDetail/Placeholder'

import { withRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { get } from 'lodash'
import { requestEventDetailHandler } from 'Redux/EventDetail/eventDetail.action'

const PageEventDetail = ({ history, match = {} }) => {
  const dispatch = useDispatch()
  const isFetching = useSelector(state => get(state, 'eventDetail.isFetching'))
  const error = useSelector(state => get(state, 'eventDetail.error'))

  useEffect(
    () => {
      const id = get(match, 'params.id')
      const requestDetailPage = async () => {
        await dispatch(requestEventDetailHandler({ id }))
      }
      requestDetailPage()
    },
    [match, dispatch]
  )

  useEffect(
    () => {
      error && history.replace('/404')
    },
    [error, history]
  )

  return isFetching ? <Placeholder /> : <EventDetail />
}

export default withRouter(PageEventDetail)
