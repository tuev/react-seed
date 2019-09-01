import React from 'react'
import { Row } from 'reactstrap'

const EventOrganizer = ({
  organizer = 'Organizer',
  organizerHeading = 'Organizer of 2019 Fall Uglobal & EB-5 Immigration Expo Ho Chi Minh City',
  organizerAbout = 'Uglobal is a multimedia platform built to provide professionals involved in international investment immigration programs with the  most comprehensive and credible sources of information in digital,  print and seminar mediums.'
}) => (
  <Row className='d-flex justify-content-center'>
    <div className='organizer'>
      <h5>{organizer}</h5>
      <h6>{organizerHeading}</h6>
      <p>
        <span>{organizerAbout}</span>
      </p>
      <div className='organizer__button'>
        <button>Follow</button>
        <button>Contact</button>
      </div>
    </div>
  </Row>
)

export default EventOrganizer
