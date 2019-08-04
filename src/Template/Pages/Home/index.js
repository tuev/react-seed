import React, { Component } from 'react'
import { isEmpty } from 'lodash'
import { connect } from 'react-redux'
import { requestEvent } from 'Redux/Event/event.action'
import EventList from 'Components/EventList'
import EventBanner from 'Components/EventBanner'
import Search from 'Containers/SearchNav'
import Catagories from 'Components/Categories'
import eventData from './event'

class HomePage extends Component {
  componentDidMount () {
    // this.props.requestEvent({ endpoint: 'test' })
  }

  render () {
    return (
      <div>
        <Search />
        {!isEmpty(eventData) &&
          eventData.map((itemsList = {}, idx) => (
            <EventList key={idx} {...itemsList} />
          ))}
        <EventBanner />
        <Catagories />
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
