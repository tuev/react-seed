import React from 'react'
import { Container, Row } from 'reactstrap'

const SliderItem = ({ title = '', image = '', subtitle = '' }) => (
  <div className='slider-event__item'>
    <Container>
      <Row>
        <div className='slider-event__item--image'>
          <div className='slider-event__item--frame'>
            <img src={image} alt={title} />
          </div>
        </div>
      </Row>
      <Row className='slider-event__item--title d-flex pt-2 justify-content-center '>
        <h4>{title}</h4>
      </Row>
      <Row className='slider-event__item--subtitle justify-content-center'>
        <p>{subtitle}</p>
      </Row>
    </Container>
  </div>
)

export default SliderItem
