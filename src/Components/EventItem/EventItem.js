import React, { useMemo } from 'react'
import { Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import moment from 'moment'
import { faShareAlt, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import './event.scss'

const Item = ({ image = '', alt, date, location, price, name } = {}) => {
  const month = useMemo(() => moment(date).format('MMM'), [date])
  const day = useMemo(() => moment(date).format('DD'), [date])
  const time = useMemo(() => moment(date).format('YYYY/MM/DD hh:mm A'), [date])
  return (
    <Col lg='4' md='6' sm='12' className='event-item pl-0 pr-3 pb-3'>
      <div className='item'>
        <Row className='item__image mx-0'>
          <img src={image} alt={alt} />
          {price === 'Free' && (
            <div className='item__image--free d-flex position-absolute justify-content-center align-items-center'>
              <span>Free</span>
            </div>
          )}
        </Row>
        <Row className='item__info py-4 px-3 position-relative'>
          <Col xs='2'>
            <p className='item__info item__info--month'>{month}</p>
            <p className='item__info item__info--date'>{day}</p>
          </Col>
          <Col xs='10' className='d-flex flex-column align-items-start'>
            <p className='item__info item__info--title'>{name}</p>
            <p className='item__info item__info--time'>{time}</p>
            <p className='item__info item__info--address'>{location}</p>
            <p className='item__info item__info--price'>{price}</p>
          </Col>
          <div className='item__action d-flex position-absolute'>
            <Col className='pl-0'>
              <div className='item__action--share d-flex justify-content-center align-items-center'>
                <FontAwesomeIcon icon={faShareAlt} />
              </div>
            </Col>
            <Col className='pl-0'>
              <div className='item__action--like d-flex justify-content-center align-items-center'>
                <FontAwesomeIcon icon={faThumbsUp} />
              </div>
            </Col>
          </div>
        </Row>
      </div>
    </Col>
  )
}

export default Item