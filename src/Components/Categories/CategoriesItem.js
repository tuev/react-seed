import React from 'react'
import { Container, Row } from 'reactstrap'

const CategoriesItem = ({ title = '', image = '', subtitle = '' }) => (
  <div className='categories-event__item'>
    <Container>
      <Row>
        <img src={image} />
      </Row>
      <Row>
        <h3>{title}</h3>
      </Row>
      <Row>
        <p>{subtitle}</p>
      </Row>
    </Container>
  </div>
)

export default CategoriesItem
