import React, { useCallback } from 'react'
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons'
import { Row, Col, TextInputWrapper as TextInput } from 'Components'
import { EVENT_CHANGE, eventLocationType } from '../eventActionType'
import EventSection from '../EventSection'

const EventLocation = ({ values, dispatch }) => {
  const handleChange = useCallback(
    property => e =>
      dispatch({
        type: EVENT_CHANGE,
        property,
        payload: e.target.value
      }),
    [dispatch]
  )

  return (
    <EventSection
      icon={faSearchLocation}
      title='Location'
      description='Help people in the area discover your event and let attendees
          know where to show up.'
    >
      <Row display='flex' width='100%'>
        <Col sm={12} md={6}>
          <TextInput
            id='type'
            select
            fullWidth
            label='Event location type'
            value={values.locationType}
            onChange={handleChange('locationType')}
            margin='normal'
            SelectProps={{ native: true }}
            variant='outlined'
          >
            {eventLocationType.map((option = {}) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextInput>
        </Col>
      </Row>
      <Row px='15px' width='100%'>
        <TextInput
          id='location'
          label='Event location'
          value={values.location}
          onChange={handleChange('location')}
          margin='normal'
          fullWidth
          variant='outlined'
          required
        />
      </Row>
    </EventSection>
  )
}

export default EventLocation
