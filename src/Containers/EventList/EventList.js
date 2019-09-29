import React, { useMemo } from 'react'
import { Container, Row } from 'reactstrap'
import useGetPagination from 'Hooks/useGetPagination'
import { isEmpty } from 'lodash'
import EventItem from 'Components/EventItem'
import EventListPlaceHolder from './Placeholder'
import './eventList.scss'

const EventList = ({ subject = '', history, ...props }) => {
  const { skip, limit, items, isFetching } = useGetPagination('event')
  const eventList = useMemo(
    () =>
      items
        .slice(skip - limit, limit)
        .map((item = {}) => ({ ...item, locationData: item.location })),
    [items, limit, skip]
  )

  return isFetching ? (
    <EventListPlaceHolder />
  ) : (
    <Container>
      <Row className='event-list'>
        <h1 className='subject'>{subject}</h1>
      </Row>
      <Row>
        {!isEmpty(eventList) &&
          eventList.map((item = {}) => (
            <EventItem
              key={item._id}
              redirect={props.redirect(item._id)}
              {...item}
            />
          ))}
      </Row>
    </Container>
  )
}

export default EventList
