import React from 'react'
import ContentLoader from 'react-content-loader'
import { Col } from 'reactstrap'

const EventItemPlaceholder = () => {
  return (
    <Col lg='4' md='6' sm='12' className='event-item pl-0 pr-3 pb-3'>
      <ContentLoader
        height={380}
        width={350}
        speed={2}
        primaryColor='#f3f3f3'
        secondaryColor='#ecebeb'
      >
        <rect x='92' y='17' rx='0' ry='0' width='0' height='0' />
        <rect x='2' y='2' rx='0' ry='0' width='353' height='259' />
        <rect x='246' y='185' rx='0' ry='0' width='0' height='0' />
        <circle cx='46' cy='318' r='26' />
        <rect x='114' y='286' rx='0' ry='0' width='182' height='18' />
        <rect x='116' y='313' rx='0' ry='0' width='117' height='14' />
        <rect x='114' y='338' rx='0' ry='0' width='168' height='18' />
      </ContentLoader>
    </Col>
  )
}

export default EventItemPlaceholder
