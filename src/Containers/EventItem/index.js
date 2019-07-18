import React from 'react'
import { Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareAlt, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import './event.scss'

const Item = ({ image, alt, month, date, title, content, address, price }) => (
  <Col lg='4' md='6' sm='12' className='event-item pl-0 pr-3 pb-3'>
    <div className='px-4 item'>
      <Row className='item__image position-relative'>
        <img src={image} alt={alt} />
        {price === 'Free' && <div className='item__free d-flex position-absolute justify-content-center align-items-center'>
          <span>
            Free
          </span>
        </div>
        }
      </Row>
      <Row className='item__info py-3 position-relative'>
        <Col xs='2'>
          <p className='info__month mb-0'>{month}</p>
          <p className='info__date mb-0'>{date}</p>
        </Col>
        <Col xs='10' className='d-flex flex-column align-items-start'>
          <p className='info__title mb-0'>{title}</p>
          <p className='info__content mb-0'>{content}</p>
          <p className='info__address mb-0'>{address}</p>
          <p className='info__price mb-0'>{price}</p>
        </Col>
        <div className='item__action d-flex position-absolute'>
          <Col className='pl-0'>
            <div className='item-share d-flex justify-content-center align-items-center'>
              <FontAwesomeIcon icon={faShareAlt} />
            </div>
          </Col>
          <Col className='pl-0'>
            <div className='item-like d-flex justify-content-center align-items-center'>
              <FontAwesomeIcon icon={faThumbsUp} />
            </div>
          </Col>
        </div>
      </Row>
    </div>
  </Col>
)

export default Item
