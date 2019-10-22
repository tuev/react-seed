import React, { useMemo, useCallback } from 'react'
import { Toolbar, IconButton, Tooltip } from '@material-ui/core'
import { Delete } from '@material-ui/icons'
import Text from 'Components/Text'
import { useDispatch, useSelector } from 'react-redux'
import { deleteEventCreateHandler } from 'Redux/EventCreate/eventCreate.action'
import { requestEventHandler } from 'Redux/Event/event.action'
import { get } from 'lodash'
import useAuthorizationRequest from 'Hooks/useAuthorizationRequest'

const EnhancedTableToolbar = ({ numSelected, selectedIds }) => {
  const dispatch = useDispatch()
  const token = useSelector(state => get(state, ['profile', 'data', 'token']))
  const text = useMemo(
    () => (numSelected > 0 ? `${numSelected} selected` : 'Your events'),
    [numSelected]
  )

  const [_getEventData] = useAuthorizationRequest(
    requestEventHandler,
    {},
    { author: true }
  )

  const handleDeleteAll = useCallback(
    () => {
      const deleteItemSelected = async () => {
        await Promise.all(
          selectedIds.map(async id =>
            dispatch(deleteEventCreateHandler({ token, id }))
          )
        )
        _getEventData()
      }
      deleteItemSelected()
    },
    [_getEventData, dispatch, selectedIds, token]
  )

  return (
    <Toolbar>
      <div>
        <Text>{text}</Text>
      </div>
      <div>
        {numSelected ? (
          <Tooltip title='Delete'>
            <IconButton aria-label='delete' onClick={handleDeleteAll}>
              <Delete />
            </IconButton>
          </Tooltip>
        ) : (
          <div />
        )}
      </div>
    </Toolbar>
  )
}

export default EnhancedTableToolbar
