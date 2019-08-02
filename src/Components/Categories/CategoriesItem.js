import React from 'react'
import { Container, Row } from 'reactstrap'

const CategoriesItem = ({ title = '', image = '', subtitle = '' }) => (
  <div className='categories-event__item'>
    <Container>
      <Row>
        <div className='categories-event__item--image'>
          <img src={image} />
        </div>
      </Row>
      <Row>
        <h4>{title}</h4>
      </Row>
      <Row>
        <p>{subtitle}</p>
      </Row>
    </Container>
  </div>
)

export default CategoriesItem
