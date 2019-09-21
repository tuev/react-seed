import React, { useCallback } from 'react'
import SwipeableViews from 'react-swipeable-views'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import BasicInfo from './BasicInfo'

function TabPanel (props) {
  const { children, value, index, ...other } = props

  return (
    <Typography
      component='div'
      role='tabpanel'
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  )
}

const EventPanels = ({ value, setValue }) => {
  const handleChangeIndex = useCallback(index => setValue(index), [setValue])
  return (
    <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
      <TabPanel value={value} index={0}>
        <BasicInfo />
      </TabPanel>
      <TabPanel value={value} index={1}>
        asdasdkjh
      </TabPanel>
      <TabPanel value={value} index={2}>
        asdasd
      </TabPanel>
    </SwipeableViews>
  )
}

export default EventPanels
