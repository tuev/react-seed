import React, { Component } from 'react'
import { connect } from 'react-redux'
import { requestEvent } from 'Redux/Event/event.action'

class HomePage extends Component {
  componentDidMount () {
    this.props.requestEvent({ endpoint: 'test' })
  }
  render () {
    return (
      <div>
        <h1>HOME PAGE</h1>
        <button onClick={() => this.props.requestEvent({ endpoint: 'test' })}>
          FETCH
        </button>
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
