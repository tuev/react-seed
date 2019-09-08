import React, { useReducer } from 'react'
import { Container } from 'reactstrap'
import moment from 'moment'
import { Form } from 'Components'
import eventReducer from './eventReducer'
import EventBasicInfo from './EventBasicInfo'
import EventLocation from './EventLocation'
import EventTime from './EventTime'
import EventSubmit from './EventSubmit'

const EventCreate = () => {
  const [values, dispatch] = useReducer(eventReducer, {
    title: '',
    type: 'tour',
    category: 'charity',
    organizer: '',
    locationType: 'revenue',
    location: '',
    timeStart: new Date(),
    timeEnd: moment().add('1', 'y')
  })

  // TODO: Should create a Form component atke a layout + items
  // TODO: ADD FORM VALIDATION
  return (
    <Container>
      <Form width='100%'>
        <EventBasicInfo values={values} dispatch={dispatch} />
        <EventLocation values={values} dispatch={dispatch} />
        <EventTime values={values} dispatch={dispatch} />
      </Form>
      <EventSubmit values={values} dispatch={dispatch} />
    </Container>
  )
}

export default EventCreate
