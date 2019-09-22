import React from 'react'
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons'
import { Row, Col, TextInput } from 'Components'
import { eventAddressType } from '../eventActionType'
import EventSection from '../EventSection'

const EventLocation = ({ values = {}, onChange }) => (
  <EventSection
    icon={faSearchLocation}
    title='Location'
    description='Help people in the area discover your event and let attendees
          know where to show up.'
  >
    <Row display='flex' width='100%'>
      <Col sm={12} md={6}>
        <TextInput
          id='addressType'
          select
          fullWidth
          label='Event location type'
          value={values.addressType}
          onChange={onChange('addressType')}
          margin='normal'
          SelectProps={{ native: true }}
          variant='outlined'
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
        id='address'
        label='Event location'
        value={values.address}
        onChange={onChange('address')}
        margin='normal'
        fullWidth
        variant='outlined'
        required
      />
    </Row>
  </EventSection>
)

export default EventLocation
