import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import {
  faChevronRight,
  faChevronLeft
} from '@fortawesome/free-solid-svg-icons'
import './categories.scss'

const Arrows = ({ className, style, onClick, icon, arrow }) => (
  <div
    className={classNames(
      className,
      ' categories-event__arrow',
      {
        'categories-event__arrow--prev': arrow === 'left',
        'categories-event__arrow--next': arrow === 'right'
      }
    )}
    style={{ ...style }}
    onClick={onClick}
  >
    <div className='categories-event__arrow--content d-flex align-items-center justify-content-center'>
      <FontAwesomeIcon icon={icon} />
    </div>
  </div>
)

const PrevArrow = (_props) =>
  <Arrows {..._props} icon={faChevronLeft} arrow={'left'} />

const NextArrow = (_props) =>
  <Arrows {..._props} icon={faChevronRight} arrow={'right'} />

export { NextArrow, PrevArrow }
