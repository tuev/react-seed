import React from 'react'
import { Row, Container } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPauseCircle } from '@fortawesome/free-solid-svg-icons'
import './slider.scss'

const Item = ({ image, alt }) => (
  <div>
    <Container>
      <Row>
        <img width='1300' height='410' src={image} alt={alt} />
        <div className='free d-flex position-absolute justify-content-center align-items-center'>
          <FontAwesomeIcon icon={faPauseCircle} />
        </div>
      </Row>
    </Container>
  </div>
)

export default Item
