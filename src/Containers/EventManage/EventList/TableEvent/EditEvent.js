import React, { useState, useCallback } from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { get } from 'lodash'
import { withRouter } from 'react-router-dom'

const EditEvent = ({ history, ...restInfo }) => {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const redirect = get(restInfo, 'redirect')

  const _defaultItemSelect = useCallback(
    () => history.push(`/event/${get(restInfo, '_id', '')}`),
    [history, restInfo]
  )

  const _handleEditEvent = useCallback(
    () => (redirect ? redirect() : _defaultItemSelect()),
    [_defaultItemSelect, redirect]
  )

  const _handleViewEvent = () => _defaultItemSelect()

  return (
    <div>
      <Button
        aria-controls='simple-menu'
        aria-haspopup='true'
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={faEllipsisV} />
      </Button>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={_handleViewEvent}>View</MenuItem>
        <MenuItem onClick={_handleEditEvent}>Edit</MenuItem>
        <MenuItem onClick={handleClose}>Delete</MenuItem>
      </Menu>
    </div>
  )
}

export default withRouter(EditEvent)
