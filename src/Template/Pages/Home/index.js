import React, { useEffect, useCallback } from 'react'
import { withRouter } from 'react-router-dom'
import EventList from 'Containers/EventList'
import EventBanner from 'Components/EventBanner'
import EventPagination from 'Containers/EventPagination'
import Slider from 'Containers/EventBanner'
import EventMember from 'Containers/EventMember'
// import Search from 'Containers/SearchNav'

import { useDispatch } from 'react-redux'
import { requestEventHandler } from 'Redux/Event/event.action'

const HomePage = ({ history }) => {
  const dispatch = useDispatch()
  const redirect = useCallback(id => e => history.push(`/event/${id}`), [history])
  useEffect(
    () => {
      async function getEvent () {
        dispatch(requestEventHandler())
      }
      getEvent()
    },
    [dispatch]
  )
  return (
    <div>
      <Slider />
      {/* <Search /> */}
      <EventList redirect={redirect} />
      <EventPagination />
      <EventBanner />
      <EventMember />
    </div>
  )
}

export default withRouter(HomePage)
