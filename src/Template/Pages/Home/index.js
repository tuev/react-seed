import React, { Component } from 'react'
import EventItem from 'Containers/Event'
import { connect } from 'react-redux'
import { requestEvent } from 'Redux/reducers/event/event.action'

class HomePage extends Component {
  componentDidMount () {
    this.props.requestEvent({ endpoint: 'test' })
  }
  render () {
    return (
      <div>
        <h1>HOME PAGE</h1>
        <button>FETCH</button>
        <EventItem />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return state
}

export default connect(
  mapStateToProps,
  { requestEvent }
)(HomePage)
