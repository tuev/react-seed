import React from 'react'
import { Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareAlt, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import './event.scss'

const Item = ({ image, alt, month, date, title, content }) => (
  <Col lg='4' md='6' sm='12' className='event-item pl-0 pr-3 pb-3'>
    <div className='item'>
      <Row className='item__image mx-0'>
        <img src={image} alt={alt} />
      </Row>
      <Row className='item__info p-3 position-relative'>
        <Col xs='2'>
          <p className='item__info--month mb-0'>{month}</p>
          <p className='item__info--date mb-0'>{date}</p>
        </Col>
        <Col xs='10' className='d-flex flex-column align-items-start'>
          <p className='item__info--title mb-0'>{title}</p>
          <p className='item__info--content mb-0'>{content}</p>
          <p className='item__info--address mb-0'>{'- Somewhere...?'}</p>
          <p className='item__info--price mb-0'>{'- Free or Premium ?'}</p>
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

export default Item