import React, { useMemo, useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import './slider.scss'

const Arrows = ({ className, onClick, icon, arrow }) => {
  const _className = useMemo(
    () =>
      classNames(className, ' slider-event__arrow', {
        'slider-event__arrow--prev': arrow === 'left',
        'slider-event__arrow--next': arrow === 'right'
      }),
    [arrow, className]
  )

  const handleClick = useCallback(onClick, [])

  return (
    <div className={_className} onClick={handleClick}>
      <div className='slider-event__arrow--content d-flex align-items-center justify-content-center'>
        <FontAwesomeIcon icon={icon} />
      </div>
    </div>
  )
}

const PrevArrow = _props => (
  <Arrows {..._props} icon={faChevronLeft} arrow='left' />
)

const NextArrow = _props => (
  <Arrows {..._props} icon={faChevronRight} arrow='right' />
)

export { NextArrow, PrevArrow }
