import React from 'react'
import useTextFieldProps from 'Hooks/useTextFieldProps'
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons'
import { Row, Col, TextInput } from 'Components'
import { eventAddressType } from '../eventActionType'
import EventSection from '../EventSection'

const EventLocation = ({ values = {}, onChange, error = {} }) => {
  const textFieldProps = useTextFieldProps({
    values,
    error,
    onChange
  })

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
            {...textFieldProps({
              id: 'addressType',
              label: 'Event location type'
            })}
            select
            SelectProps={{ native: true }}
          >
            {eventAddressType.map((option = {}) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextInput>
        </Col>
      </Row>
      <Row px='15px' width='100%'>
        <TextInput
          {...textFieldProps({ id: 'address', label: 'Event location' })}
        />
      </Row>
    </EventSection>
  )
}

export default EventLocation
