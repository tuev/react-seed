import React from 'react'
import { Col } from 'reactstrap'
import TextField from '@material-ui/core/TextField'

const EventStatus = ({ statusItems, values, handleChange }) => {
  return (
    <Col md='4' sm='12'>
      <TextField
        id='outlined-select-currency-native'
        select
        label='Event status'
        className='events-manage__search--item'
        value={values.status}
        onChange={handleChange('status')}
        SelectProps={{
          native: true
        }}
        // helperText="Please select event status"
        margin='normal'
        variant='outlined'
      >
        {statusItems.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>
    </Col>
  )
}

export default EventStatus
