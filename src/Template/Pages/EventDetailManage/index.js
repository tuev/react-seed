import React, { useCallback, useEffect, useState } from 'react'
import { Container } from 'reactstrap'
import { requestEventCreateHandler } from 'Redux/EventCreate/eventCreate.action'
import { get } from 'lodash'
import { withRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'Components'

import useAuthorizationRequest from 'Hooks/useAuthorizationRequest'
import EventTabs from './EventTabs'
import EventPanels from './EventPanels'

const EventDetailManage = ({ match, history }) => {
  const [value, setValue] = useState(0)
  const dispatch = useDispatch()
  const handleChange = useCallback((_, newValue) => setValue(newValue), [])
  const error = useSelector(state => get(state, ['eventCreate', 'error']))
  const id = get(match, 'params.id')

  const eventId = useSelector(state =>
    get(state, ['eventCreate', 'data', '_id'])
  )
  const _redirect = () => history.push('/')

  const [getEventData] = useAuthorizationRequest(
    requestEventCreateHandler,
    { id },
    { errorHandler: _redirect }
  )
  useEffect(
    () => {
      !eventId && getEventData()
    },
    [dispatch, eventId, getEventData, match]
  )
  useEffect(() => {
    if (error && (error.indexOf('404') > 0 || error.indexOf('403'))) {
      _redirect()
    }
  })

  return (
    <Container>
      <Row>
        <Col md='3' xs='0' display={['none', 'none', 'block', 'block']}>
          <EventTabs value={value} handleChange={handleChange} />
        </Col>
        <Col md='12' xs='0' display={['block', 'block', 'none', 'none']}>
          <EventTabs
            value={value}
            handleChange={handleChange}
            tabProps={{
              orientation: 'horizontal',
              center: 1,
              variant: 'fullWidth'
            }}
          />
        </Col>
        <Col md='9' xs='12'>
          <EventPanels value={value} setValue={setValue} />
        </Col>
      </Row>
    </Container>
  )
}

export default withRouter(EventDetailManage)
