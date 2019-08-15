import React, { Component } from 'react'
import { isEmpty } from 'lodash'
import { connect } from 'react-redux'
import { requestEvent } from 'Redux/Event/event.action'
import EventList from 'Components/EventList'
import EventBanner from 'Components/EventBanner'
import Slider from 'Components/Slider'
import Search from 'Containers/SearchNav'
import Catagories from 'Components/Categories'
import Spinner from 'Components/Spinner'
import EventEmpty from 'Components/EventEmpty'
import EventError from 'Components/EventError'

class HomePage extends Component {
  componentDidMount () {
    this.props.requestEvent({
      endpoint: 'https://express-event.herokuapp.com/api/v1/event'
    })
  }

  render () {
    const {
      data,
      isLoading,
      isLoadSuccess,
      isLoadError,
      errorMessage
    } = this.props

    return (
      <div>
        <Slider />
        <Search />
        {isLoading && <Spinner />}
        {isLoadSuccess &&
          (!isEmpty(data.data.data) ? (
            <EventList items={data.data.data} />
          ) : (
            <EventEmpty />
          ))}
        {isLoadError && <EventError error={errorMessage} />}
        <EventBanner />
        <Catagories />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { events } = state
  const { eventData, errorMessage } = events
  const { data, isLoading, isLoadSuccess, isLoadError } = eventData
  return { errorMessage, data, isLoading, isLoadSuccess, isLoadError }
}

const mapDispatchToProps = dispatch => ({
  requestEvent: (endpoint, option) => dispatch(requestEvent(endpoint, option))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)
