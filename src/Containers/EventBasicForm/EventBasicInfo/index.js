import React from 'react'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { Row, Col, TextInput } from 'Components'
import useTextFieldProps from 'Hooks/useTextFieldProps'
import { eventType, categories } from '../eventActionType'
import EventSection from '../EventSection'

const EventBasicInfo = ({ values = {}, onChange, error = {} }) => {
  const textFieldProps = useTextFieldProps({
    values,
    error,
    onChange
  })

  return (
    <EventSection
      icon={faEdit}
      name='Basic info'
      description=' Name your event and tell event-goers why they should come. Add
                  details that highlight what makes it unique.'
    >
      <Row px='15px' width='100%'>
        <TextInput {...textFieldProps({ id: 'name', label: 'Event name' })} />
      </Row>
      <Row display='flex' width='100%'>
        <Col sm={12} md={6}>
          <TextInput
            select
            SelectProps={{ native: true }}
            {...textFieldProps({ id: 'type', label: 'Event type' })}
          >
            {eventType.map((option = {}) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextInput>
        </Col>
        <Col sm={12} md={6}>
          <TextInput
            select
            SelectProps={{ native: true }}
            {...textFieldProps({ id: 'category', label: 'Event category' })}
          >
            {categories.map((option = {}) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextInput>
        </Col>
      </Row>
      <Row px='15px' width='100%'>
        <TextInput {...textFieldProps({ id: 'organizer', label: 'Organizer' })} />
      </Row>
    </EventSection>
  )
}
export default EventBasicInfo
