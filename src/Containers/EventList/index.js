import React, { useEffect, useMemo } from 'react'
import { Container, Row } from 'reactstrap'
import { useDispatch } from 'react-redux'
import { requestEventHandler } from 'Redux/Event/event.action'
import useGetPagination from 'Hooks/useGetPagination'
import { isEmpty } from 'lodash'
import EventItem from 'Components/EventItem'

import './eventList.scss'

const EventList = ({ subject = '', ...props }) => {
  const dispatch = useDispatch()
  const { skip, limit, items } = useGetPagination('event')

  useEffect(
    () => {
      async function getEvent () {
        dispatch(requestEventHandler({ endpoint: 'event' }))
      }
      getEvent()
    },
    [dispatch]
  )
  console.log(skip, limit, 'test')
  const eventList = useMemo(() => items.slice(skip - limit, limit), [
    items,
    limit,
    skip
  ])
  return (
    <Container>
      <Row className='event-list'>
        <h1 className='subject'>{subject}</h1>
      </Row>
      <Row>
        {!isEmpty(eventList) &&
          eventList.map((item = {}) => <EventItem key={item._id} {...item} />)}
      </Row>
    </Container>
  )
}

export default EventList
