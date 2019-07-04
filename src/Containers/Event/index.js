import React, { Component } from 'react'
import './event.css'
import './event.scss'
import { EventWrapper } from './Event.style'

export default class EventItem extends Component {
  render () {
    return (
      <EventWrapper
        style={{
          width: 150,
          height: 150,
          margin: '16px ',
          border: '2px solid red'
        }}
        className='event-wrapper event'>
        <div />
        <div className='position-relative pl-4'>
          <div className='date'>
            <span>JUL</span>
            <span>1</span>
          </div>
          <div>
            <h3>Title</h3>
            <span>time</span>
            <span>address</span>
          </div>
        </div>
      </EventWrapper>
    )
  }
}
