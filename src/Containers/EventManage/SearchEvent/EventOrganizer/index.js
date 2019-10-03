import React from 'react'
import { Col } from 'reactstrap'
import TextField from '@material-ui/core/TextField'

const EventOrganizer = ({
  organizerItems = [],
  values = {},
  handleChange = () => {}
}) => {
  return (
    <Col md='4' sm='12'>
      <TextField
        id='outlined-select-currency-native'
        select
        label='Organizer'
        className='events-manage__search--item'
        value={values.organizer}
        onChange={handleChange('organizer')}
        SelectProps={{
          native: true
        }}
        margin='normal'
        variant='outlined'
      >
        {organizerItems.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>
    </Col>
  )
}

export default EventOrganizer
