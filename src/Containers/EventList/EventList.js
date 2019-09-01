import React, { useEffect, useMemo } from 'react'
import { Container, Row } from 'reactstrap'
import { useDispatch } from 'react-redux'
import { requestEventHandler } from 'Redux/EventList/event.action'
import useGetPagination from 'Hooks/useGetPagination'
import { isEmpty } from 'lodash'
import EventItem from 'Components/EventItem'
import EventListPlaceHolder from './Placeholder'

import './eventList.scss'

const EventList = ({ subject = '', ...props }) => {
  const dispatch = useDispatch()
  const { skip, limit, items, isFetching } = useGetPagination('event')
  useEffect(
    () => {
      async function getEvent () {
        dispatch(requestEventHandler())
      }
      getEvent()
    },
    [dispatch]
  )
  const eventList = useMemo(() => items.slice(skip - limit, limit), [
    items,
    limit,
    skip
  ])
  return isFetching ? (
    <EventListPlaceHolder />
  ) : (
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
