import React, { Component } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Container } from 'reactstrap'
import items from './categories.json'
import CategoriesItem from './CategoriesItem'
import CategoriesConfig from './CategoriesConfig'
import './categories.scss'

export default class Responsive extends Component {
  render () {
    return (
      <div className='categories-event'>
        <Container>
          <h2 className='categories-event__title'> Categories to explore </h2>
          <Slider {...CategoriesConfig}>
            {items.map((item, idx) => (
              <CategoriesItem key={idx} {...item} />
            ))}
          </Slider>
        </Container>
      </div>
    )
  }
}
