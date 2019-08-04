import React, { Component } from 'react'
import { isEmpty } from 'lodash'
import { connect } from 'react-redux'
import { requestEvent } from 'Redux/Event/event.action'
import EventList from 'Components/EventList'
import SliderList from 'Components/SliderList'
import eventData from './event'

class HomePage extends Component {
  componentDidMount () {
    this.props.requestEvent({ endpoint: 'test' })
  }

  render () {
    return (
      <div>

        <SliderList />

        {!isEmpty(eventData) &&
          eventData.map((itemsList = {}, idx) => (
            <EventList key={idx} {...itemsList} />
          ))}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { event } = state
  return event
}

export default connect(
  mapStateToProps,
  { requestEvent }
)(HomePage)
