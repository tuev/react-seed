import React from 'react'
import { Container, Row } from 'reactstrap'

const CategoriesItem = ({ title = '', image = '', subtitle = '' }) => (
  <div className='categories-event__item'>
    <Container>
      <Row>
        <div className='categories-event__item--image'>
          <div className='categories-event__item--frame'>
            <img src={image} alt={title} />
          </div>
        </div>
      </Row>
      <Row className='categories-event__item--title d-flex justify-content-center '>
        <h4>{title}</h4>
      </Row>
      <Row className='categories-event__item--subtitle d-flex justify-content-center'>
        <p>{subtitle}</p>
      </Row>
    </Container>
  </div>
)

export default CategoriesItem
