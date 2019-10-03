import React from 'react'
import { Row } from 'reactstrap'
import SearchEnter from './SearchEnter'
import EventStatus from './EventStatus'
import EventOrganizer from './EventOrganizer'

const SearchEvent = ({
  statusItems = [],
  organizerItems = [],
  values = [],
  handleChange = () => {}
}) => {
  return (
    <div className='events-manage__search'>
      <Row>
        <SearchEnter values={values} handleChange={handleChange} />
        <EventStatus
          statusItems={statusItems}
          values={values}
          handleChange={handleChange}
        />
        <EventOrganizer
          organizerItems={organizerItems}
          values={values}
          handleChange={handleChange}
        />
      </Row>
    </div>
  )
}

export default SearchEvent
