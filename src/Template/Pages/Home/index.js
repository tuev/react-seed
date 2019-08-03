import React, { Component } from 'react'
import { isEmpty } from 'lodash'
import { connect } from 'react-redux'
import { requestEvent } from 'Redux/Event/event.action'
import EventList from 'Components/EventList'
import Search from 'Components/DropdownSearch'
import eventData from './event'

class HomePage extends Component {
  componentDidMount () {
    // this.props.requestEvent({ endpoint: 'test' })
  }

  render () {
    return (
      <div>
        {!isEmpty(eventData) && (
          <Search />
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
