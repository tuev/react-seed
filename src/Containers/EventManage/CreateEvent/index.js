import React from 'react'
import { Row, Col } from 'reactstrap'
import Fab from '@material-ui/core/Fab'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

const CreateEvent = () => {
  return (
    <div className='events-manage__create-event'>
      <Row>
        <Col className='events-manage__create-event--title'>
          <h2>Events Manage</h2>
        </Col>
        <Col className='events-manage__create-event--button'>
          <Fab variant='extended' color='primary'>
            <FontAwesomeIcon icon={faPlusCircle} size='lg' className='mx-2' />
            Create Event
          </Fab>
        </Col>
      </Row>
    </div>
  )
}

export default CreateEvent
