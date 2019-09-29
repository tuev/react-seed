import React, { useEffect, useCallback } from 'react'
import EventList from 'Containers/EventList'
import EventPagination from 'Containers/EventPagination'

import { withRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { requestEventHandler } from 'Redux/Event/event.action'
import useAuthorizationRequest from 'Hooks/useAuthorizationRequest'

const EventManage = ({ history }) => {
  const dispatch = useDispatch()
  const _redirect = useCallback(id => e => history.push(`/manage/${id}`), [
    history
  ])

  const [_getEventData] = useAuthorizationRequest(
    requestEventHandler,
    {},
    { errorHandler: _redirect, author: true }
  )
  useEffect(() => _getEventData(), [_getEventData, dispatch])
  return (
    <div>
      {/* <Search /> */}
      <EventList redirect={_redirect} />
      <EventPagination />
    </div>
  )
}

export default withRouter(EventManage)
