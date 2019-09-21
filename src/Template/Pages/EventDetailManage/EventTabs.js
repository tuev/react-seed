import React from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

const EventCreateTabs = ({ value, handleChange, tabProps = {} }) => (
  <Tabs
    value={value}
    onChange={handleChange}
    indicatorColor='primary'
    textColor='primary'
    orientation='vertical'
    variant='scrollable'
    aria-label='full width tabs example'
    {...tabProps}
  >
    <Tab label='Basic Info' />
    <Tab label='Description' />
    <Tab label='Publish' />
  </Tabs>
)

export default EventCreateTabs
