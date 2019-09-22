import React from 'react'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { Row, Col, TextInput } from 'Components'
import { eventType, categories } from '../eventActionType'
import EventSection from '../EventSection'

const EventBasicInfo = ({ values = {}, onChange }) => (
  <EventSection
    icon={faEdit}
    name='Basic info'
    description=' Name your event and tell event-goers why they should come. Add
                details that highlight what makes it unique.'
  >
    <Row px='15px' width='100%'>
      <TextInput
        id='name'
        label='Event name'
        value={values.name}
        onChange={onChange('name')}
        margin='normal'
        fullWidth
        variant='outlined'
        required
      />
    </Row>
    <Row display='flex' width='100%'>
      <Col sm={12} md={6}>
        <TextInput
          id='type'
          select
          fullWidth
          label='Event type'
          value={values.type}
          onChange={onChange('type')}
          margin='normal'
          SelectProps={{ native: true }}
          variant='outlined'
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
          id='category'
          select
          fullWidth
          label='Event category'
          value={values.category}
          onChange={onChange('category')}
          margin='normal'
          SelectProps={{ native: true }}
          variant='outlined'
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
      <TextInput
        id='organizer'
        label='Organizer'
        value={values.organizer}
        onChange={onChange('organizer')}
        margin='normal'
        fullWidth
        variant='outlined'
        required
      />
    </Row>
  </EventSection>
)
export default EventBasicInfo
