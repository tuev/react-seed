import React, { useCallback } from 'react'
import { Form } from 'Components'
import { get } from 'lodash'
import EventBasicInfo from './EventBasicInfo'
import EventLocation from './EventLocation'
import EventTime from './EventTime'

const EventCreate = ({ onChange, values, error = {} }) => {
  // TODO: Should create a Form component atke a layout + items
  // TODO: ADD FORM VALIDATION
  const handleChange = useCallback(
    property => e => onChange({ [property]: get(e, ['target', 'value'], e) }),
    [onChange]
  )
  return (
    <Form width='100%'>
      <EventBasicInfo values={values} onChange={handleChange} error={error} />
      <EventLocation values={values} onChange={handleChange} error={error} />
      <EventTime values={values} onChange={handleChange} error={error} />
    </Form>
  )
}

export default EventCreate
