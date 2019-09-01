import React from 'react'
import EventList from 'Containers/EventList'
// import EventBanner from 'Components/EventBanner'
import EventPagination from 'Containers/EventPagination'
import Slider from 'Containers/Slider'
// import Search from 'Containers/SearchNav'
// import Catagories from 'Components/Categories'

const HomePage = () => (
  <div>
    <Slider />
    {/* <Search /> */}
    <EventList />
    <EventPagination />
    {/* <EventBanner />
    <Catagories /> */}
  </div>
)

export default HomePage
