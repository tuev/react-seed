import React, { Component } from 'react'
import { isEmpty } from 'lodash'
import { connect } from 'react-redux'
import { requestEvent } from 'Redux/Event/event.action'
import EventList from 'Components/EventList'
import EventBanner from 'Components/EventBanner'
import Slider from 'Components/Slider'
import Search from 'Containers/SearchNav'
import Filters from 'Containers/FilterNav'
import Catagories from 'Components/Categories'
import eventData from './event'

class HomePage extends Component {
  componentDidMount () {
    // this.props.requestEvent({ endpoint: 'test' })
  }

  render () {
    return (
      <div>
        <Slider />
        <Search />
        <Filters />
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
  {
    requestEvent
  }
)(HomePage)
