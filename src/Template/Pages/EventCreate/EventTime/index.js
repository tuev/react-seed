import React, { useCallback } from 'react'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { Row, Col } from 'Components'
import {
  MuiPickersUtilsProvider,
  KeyboardDateTimePicker
} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import { EVENT_CHANGE } from '../eventActionType'
import EventSection from '../EventSection'

const EventTime = ({ values, dispatch }) => {
  const handleChange = useCallback(
    property => value =>
      dispatch({
        type: EVENT_CHANGE,
        property,
        payload: value
      }),
    [dispatch]
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
              onChange={handleChange('timeStart')}
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
              onChange={handleChange('timeEnd')}
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
