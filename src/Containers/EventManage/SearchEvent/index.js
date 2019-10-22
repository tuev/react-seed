import React from 'react'
import { Row } from 'reactstrap'
import SearchEnter from './SearchEnter'
import EventStatus from './EventStatus'
// import EventOrganizer from './EventOrganizer'

const SearchEvent = () => {
  return (
    <div className='events-manage__search'>
      <Row>
        <SearchEnter />
        <EventStatus />
      </Row>
    </div>
  )
}

export default SearchEvent
