import React, { useMemo, useCallback } from 'react'
import { Row, Col } from 'reactstrap'
import { get } from 'lodash'
import { withRouter } from 'react-router-dom'
import { Like } from 'react-facebook'
import moment from 'moment'

import './event.scss'
import defaultImage from './default-image.jpg'

const Item = ({
  history,
  banner = {},
  alt,
  timeStart: date,
  locationData,
  price,
  name,
  ...restInfo
} = {}) => {
  const month = useMemo(() => moment(date).format('MMM'), [date])
  const day = useMemo(() => moment(date).format('DD'), [date])
  const time = useMemo(() => moment(date).format('YYYY/MM/DD hh:mm A'), [date])
  const redirect = get(restInfo, 'redirect')
  const urlDetail = useMemo(
    () =>
      `https://brightsmile.firebaseapp.com/#/event/${get(restInfo, '_id', '')}`,
    [restInfo]
  )
  const _defaultItemSelect = useCallback(
    () => history.push(`/event/${get(restInfo, '_id', '')}`),
    [history, restInfo]
  )

  const _handleOnItemSelect = useCallback(
    () => (redirect ? redirect() : _defaultItemSelect()),
    [_defaultItemSelect, redirect]
  )

  const url = useMemo(() => get(banner, 'url', defaultImage), [banner])

  return (
    <Col lg='4' md='6' sm='12' className='event-item pl-0 pr-3 pb-3'>
      <div className='item'>
        <Row className='item__image mx-0' onClick={_handleOnItemSelect}>
          <img src={url} alt={alt} />
          {price === 'Free' && (
            <div className='item__image--free d-flex position-absolute justify-content-center align-items-center'>
              <span>Free</span>
            </div>
          )}
        </Row>
        <Row className='item__info item__info__wrapper py-4 px-3 position-relative'>
          <Col xs='2' className='d-flex align-items-center flex-column'>
            <p className='item__info item__info--month'>{month}</p>
            <p className='item__info item__info--date'>{day}</p>
          </Col>
          <Col
            xs='10'
            className='d-flex flex-column align-items-start'
            onClick={_handleOnItemSelect}
          >
            <p className='item__info item__info--title'>{name}</p>
            <p className='item__info item__info--time'>{time}</p>
            <p className='item__info item__info--address'>{locationData}</p>
            <p className='item__info item__info--price'>{price}</p>
          </Col>
          <div className='item__action d-flex position-absolute'>
            <Like
              href={urlDetail}
              colorScheme='dark'
              showFaces
              share
              layout='button_count'
            />
          </div>
        </Row>
      </div>
    </Col>
  )
}

export default withRouter(Item)
