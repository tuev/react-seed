import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronRight,
  faChevronLeft
} from '@fortawesome/free-solid-svg-icons'
import './categories.scss'

const PrevArrow = ({ className, style, onClick }) => (
  <div
    className={
      className + ' categories-event__arrow categories-event__arrow--prev'
    }
    style={{ ...style }}
    onClick={onClick}
  >
    <div className='categories-event__arrow--content d-flex align-items-center justify-content-center'>
      <FontAwesomeIcon icon={faChevronLeft} />
    </div>
  </div>
)

const NextArrow = ({ className, style, onClick }) => (
  <div
    className={
      className + ' categories-event__arrow categories-event__arrow--next'
    }
    style={{ ...style }}
    onClick={onClick}
  >
    <div className='categories-event__arrow--content  d-flex align-items-center justify-content-center'>
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  </div>
)

export { NextArrow, PrevArrow }
