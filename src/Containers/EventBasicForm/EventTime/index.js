import React, { useCallback } from 'react'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { Row, Col } from 'Components'
import {
  MuiPickersUtilsProvider,
  KeyboardDateTimePicker
} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import EventSection from '../EventSection'

const EventTime = ({ values = {}, onChange }) => {
  const onTimeChange = useCallback(
    type => value => {
      onChange(type)(value)
    },
    [onChange]
  )
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <EventSection
        icon={faClock}
        title='Date and time'
        description='Tell event-goers when your event starts and ends so they can make plans to attend.'
      >
        <Row display='flex' width='100%'>
          <Col sm={12} md={6}>
            <KeyboardDateTimePicker
              inputVariant='outlined'
              id='event-time-start'
              label='Event time start'
              disablePast
              fullWidth
              maxDate={values.timeEnd}
              value={values.timeStart}
              onChange={onTimeChange('timeStart')}
              KeyboardButtonProps={{
                'aria-label': 'change date'
              }}
            />
          </Col>
          <Col sm={12} md={6}>
            <KeyboardDateTimePicker
              inputVariant='outlined'
              id='event-time-end'
              label='Event time end'
              disablePast
              minDate={values.timeStart}
              fullWidth
              value={values.timeEnd}
              onChange={onTimeChange('timeEnd')}
              KeyboardButtonProps={{
                'aria-label': 'change time'
              }}
            />
          </Col>
        </Row>
      </EventSection>
    </MuiPickersUtilsProvider>
  )
}

export default EventTime
