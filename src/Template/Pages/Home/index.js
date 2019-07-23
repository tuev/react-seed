import React, { Component } from 'react'
import { isEmpty } from 'lodash'
import { connect } from 'react-redux'
import { requestEvent } from 'Redux/Event/event.action'
import EventList from 'Components/EventList'
import Search from 'Components/Search'
import eventData from './event'

class HomePage extends Component {
  componentDidMount () {
    this.props.requestEvent({ endpoint: 'test' })
  }

  render () {
    const locationSlug = '"vietnam--ho-chi-minh-city"'
    const eventDataItem = eventData.reduce((acc, curVal) => {
      return acc.concat(curVal.items)
    }, [])

    return (
      <div>
        {!isEmpty(eventData) && (
          <Search locationSlug={locationSlug} items={eventDataItem} />
        )}
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
