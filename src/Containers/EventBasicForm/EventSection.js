import React from 'react'
import { Text, Row, Col } from 'Components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { EventSectionWrapper } from './EventCreate.style'

const EventSection = ({ icon, title, description, children }) => {
  return (
    <EventSectionWrapper>
      <Row
        className='align-items-center'
        px={['0', '.5rem', '1rem', '2rem']}
        display='flex'
      >
        <Col xs={12} sm={1} py='16px' className='align-self-start text-left'>
          <FontAwesomeIcon icon={icon} size='lg' />
        </Col>
        <Col xs={12} sm={11} className='text-left'>
          <Text
            color='#1e0a3c'
            fontSize='1.875rem'
            fontWeight='bold'
            display='block'
          >
            {title}
          </Text>
          <Text
            width='50%'
            display='block'
            lineHeight='1.25rem'
            fontSize='.875rem'
          >
            {description}
          </Text>
          <Row my='32px' mx='0'>
            {children}
          </Row>
        </Col>
      </Row>
    </EventSectionWrapper>
  )
}

export default EventSection
