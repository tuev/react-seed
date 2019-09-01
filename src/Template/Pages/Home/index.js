import React, { Component } from 'react'
// import { isEmpty } from 'lodash'
import { connect } from 'react-redux'
import { requestEvent } from 'Redux/Event/event.action'
// import EventList from 'Components/EventList'
// import EventBanner from 'Components/EventBanner'
// import Slider from 'Components/Slider'
// import Search from 'Containers/SearchNav'
// import Catagories from 'Components/Categories'
// import eventData from './event'
// import EventDetail from 'Components/EventDetail'
// import itemDetail from './eventDetail.json'

class HomePage extends Component {
  componentDidMount () {
    // this.props.requestEvent({ endpoint: 'test' })
  }

  render () {
    return (
      <div>
        {/* <Slider />
        <Search />
        {!isEmpty(eventData) &&
          eventData.map((itemsList = {}, idx) => (
            <EventList key={idx} {...itemsList} />
          ))}
        <EventBanner />
        <Catagories /> */}
        {/* <EventDetail {...itemDetail} /> */}
        homepage
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return state
}

export default connect(
  mapStateToProps,
  {
    requestEvent
  }
)(HomePage)
