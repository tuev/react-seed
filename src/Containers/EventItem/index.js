import React from 'react'
import { Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareAlt, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import './event.scss'

const Item = ({ image, alt, month, date, title, content }) => (
  <Col lg='4' md='6' sm='12' className='pl-0 pr-3'>
    <div className='px-4 event'>
      <Row>
        <img src={image} alt={alt} style={{ width: '100%', height: '100%' }} />
      </Row>
      <Row className='py-3 position-relative'>
        <Col xs='2'>
          <p
            className='mb-0'
            style={{
              color: '#f05537',
              'font-size': '0.75rem',
              'line-height': '1rem'
            }}
          >
            {month}
          </p>
          <p
            className='mb-0'
            style={{
              color: '#6f7287',
              'font-size': '1.125rem',
              'line-height': '1.5rem'
            }}
          >
            {date}
          </p>
        </Col>
        <Col xs='10' className='d-flex flex-column align-items-start'>
          <p
            className='mb-0'
            style={{
              color: '#39364f',
              'font-size': '1.125rem',
              'line-height': '1.5rem',
              'font-weight': '600'
            }}
          >
            {title}
          </p>
          <p
            className='mb-0'
            style={{
              color: '#6f7287',
              'font-size': '0.75rem',
              'line-height': '1rem'
            }}
          >
            {content}
          </p>
          <p
            className='mb-0'
            style={{
              color: '#6f7287',
              'font-size': '0.75rem',
              'line-height': '1rem'
            }}
          >
            {'- Somewhere...?'}
          </p>
          <p
            className='mb-0'
            style={{
              color: '#6f7287',
              'font-size': '0.75rem',
              'line-height': '1rem'
            }}
          >
            {'- Free or Premium ?'}
          </p>
        </Col>
        <div className='d-flex position-absolute' style={{ width: 112, top: -22, right: 16 }}>
          <Col className='pl-0'>
            <div
              style={{
                borderRadius: '50%',
                border: '1px solid #eeedf2',
                padding: 1,
                width: 44,
                height: 44,
                background: 'white',
                cursor: 'pointer'
              }}
              className='d-flex justify-content-center align-items-center'
            >
              <FontAwesomeIcon icon={faShareAlt} />
            </div>
          </Col>
          <Col className='pl-0'>
            <div
              className='d-flex justify-content-center align-items-center'
              style={{
                borderRadius: '50%',
                border: '1px solid #eeedf2',
                padding: 1,
                width: 44,
                height: 44,
                background: 'white',
                cursor: 'pointer'
              }}
            >
              <FontAwesomeIcon icon={faThumbsUp} />
            </div>
          </Col>
        </div>
      </Row>
    </div>
  </Col>
)

export default Item
