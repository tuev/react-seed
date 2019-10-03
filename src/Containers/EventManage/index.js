import React, { useMemo } from 'react'
import { Container } from 'reactstrap'
import useGetPagination from 'Hooks/useGetPagination'
import CreateEvent from './CreateEvent'
import SearchEvent from './SearchEvent'
import EventList from './EventList'
import './eventsManage.scss'

const statusItems = [
  {
    value: 'All',
    label: 'All'
  },
  {
    value: 'Published',
    label: 'Published'
  },
  {
    value: 'Draf',
    label: 'Draf'
  },
  {
    value: 'Past',
    label: 'Past'
  }
]

const organizerItems = [
  {
    value: 'All',
    label: 'All'
  },
  {
    value: 'Unnamed Organizer',
    label: 'Unnamed Organizer'
  }
]

const EventsManage = ({ history, ...props }) => {
  const { skip, limit, items, isFetching } = useGetPagination('event')
  const eventList = useMemo(
    () =>
      items
        .slice(skip - limit, limit)
        .map((item = {}) => ({ ...item, locationData: item.location })),
    [items, limit, skip]
  )

  // #region Value search
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  }

  const [values, setValues] = React.useState({
    value: '',
    status: 'All',
    organizer: 'All'
  })
  // #endregion
  console.log('Event manage', eventList)

  return isFetching ? null : (
    <Container>
      <div className='events-manage'>
        <CreateEvent />
        <SearchEvent
          statusItems={statusItems}
          organizerItems={organizerItems}
          handleChange={handleChange}
          values={values}
          setValues={setValues}
        />
        <EventList redirect={props.redirect} />
      </div>
    </Container>
  )
}

export default EventsManage
