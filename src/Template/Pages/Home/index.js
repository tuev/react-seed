import React from 'react'
import EventList from 'Containers/EventList'
import EventBanner from 'Components/EventBanner'
import EventPagination from 'Containers/EventPagination'
import Slider from 'Containers/EventBanner'
import EventMember from 'Containers/EventMember'
// import Search from 'Containers/SearchNav'

const HomePage = () => (
  <div>
    <Slider />
    {/* <Search /> */}
    <EventList />
    <EventPagination />
    <EventBanner />
    <EventMember />
  </div>
)

export default HomePage
