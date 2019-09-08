import React, { useReducer } from 'react'
import { Container } from 'reactstrap'
import moment from 'moment'
import { Button } from '@material-ui/core'
import { Form } from 'Components'
import { reduxForm } from 'redux-form'
import eventReducer from './eventReducer'
import EventBasicInfo from './EventBasicInfo'
import EventLocation from './EventLocation'
import EventTime from './EventTime'

const validate = (values = {}) => {
  const errors = {}
  const requiredFields = [
    'title',
    'type',
    'category',
    'organizer',
    'locationType',
    'timeStart',
    'timeEnd'
  ]
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })

  return errors
}

const EventCreate = () => {
  const [values, dispatch] = useReducer(eventReducer, {
    title: '',
    type: 'tour',
    category: 'charity',
    organizer: '',
    locationType: 'revenue',
    timeStart: new Date(),
    timeEnd: moment().add('1', 'y')
  })

  const _onSubmit = e => {
    e.preventDefault()
    console.log('asdkjhk')
    console.log(e.target.value(), 'value')
  }

  // TODO: Should create a Form component atke a layout + items
  return (
    <Container>
      <>
        <Form width='100%' onSubmit={_onSubmit}>
          <EventBasicInfo values={values} dispatch={dispatch} />
          <EventLocation values={values} dispatch={dispatch} />
          <EventTime values={values} dispatch={dispatch} />
          <Button type='submit'>submit</Button>
        </Form>
      </>
    </Container>
  )
}

export default reduxForm({ validate })(EventCreate)
