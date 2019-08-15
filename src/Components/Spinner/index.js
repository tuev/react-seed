import React from 'react'
import { Container, Row } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import './spinner.scss'

const Spinner = () => (
  <Container className='spinner'>
    <div className='d-flex justify-content-center'>
      <Row>
        <FontAwesomeIcon icon={faSpinner} className='spinner__icon' />
      </Row>
    </div>
  </Container>
)

export default Spinner
