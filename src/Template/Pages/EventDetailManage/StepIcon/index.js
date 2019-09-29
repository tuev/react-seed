import React, { useMemo } from 'react'
import InfoIcon from '@material-ui/icons/Info'
import DescriptionIcon from '@material-ui/icons/Description'
import PublishIcon from '@material-ui/icons/Publish'
import ViewCarouselIcon from '@material-ui/icons/ViewCarousel'

const ColorlibStepIcon = ({ icon, active, completed }) => {
  const iconColor = useMemo(
    () => (active || completed ? '#00adb5' : 'disabled'),
    [active, completed]
  )
  const icons = useMemo(
    () => ({
      1: <InfoIcon htmlColor={iconColor} />,
      2: <DescriptionIcon htmlColor={iconColor} />,
      3: <ViewCarouselIcon htmlColor={iconColor} />,
      4: <PublishIcon htmlColor={iconColor} />
    }),
    [iconColor]
  )

  return <div>{icons[String(icon)]}</div>
}

export default ColorlibStepIcon
