import React, { useCallback } from 'react'
import Moment from 'react-moment'
import { useSelector, useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { get, map } from 'lodash'
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Checkbox,
  IconButton,
  Tooltip
} from '@material-ui/core'
import { Delete, Edit } from '@material-ui/icons'
import { deleteEventCreateHandler } from 'Redux/EventCreate/eventCreate.action'
import { requestEventHandler } from 'Redux/Event/event.action'
import useAuthorizationRequest from 'Hooks/useAuthorizationRequest'

import EnhancedTableHead from './EnhancedTableHead'

const TableEvent = ({
  numSelected,
  selectedIds = [],
  toggleSelectedId,
  history
}) => {
  const dispatch = useDispatch()
  const token = useSelector(state => get(state, ['profile', 'data', 'token']))
  const eventList = useSelector(state =>
    get(state, 'event.data.pagination.items')
  )
  const _getIsSelected = useCallback(id => selectedIds.includes(id), [
    selectedIds
  ])

  const [_getEventData] = useAuthorizationRequest(
    requestEventHandler,
    {},
    { author: true }
  )

  const handleItemChecked = useCallback(
    _id => e => {
      const isSelected = selectedIds.includes(_id)
      if (isSelected) {
        return toggleSelectedId(selectedIds.filter(item => item !== _id))
      }
      return toggleSelectedId([...selectedIds, _id])
    },
    [selectedIds, toggleSelectedId]
  )
  const selectAll = useCallback(
    () => {
      if (eventList.length === selectedIds.length) {
        return toggleSelectedId([])
      }
      toggleSelectedId(map(eventList, '_id'))
    },
    [eventList, selectedIds.length, toggleSelectedId]
  )

  const handleEdit = useCallback(id => () => history.push(`/manage/${id}`), [
    history
  ])

  const handleDelete = useCallback(
    id => () => {
      const deleteItemSelected = async () => {
        await dispatch(deleteEventCreateHandler({ token, id }))
        _getEventData()
      }
      deleteItemSelected()
    },
    [_getEventData, dispatch, token]
  )

  return (
    <div>
      <Table size='medium'>
        <EnhancedTableHead numSelected={numSelected} selectAll={selectAll} />
        <TableBody>
          {eventList.map(row => (
            <TableRow
              hover
              role='checkbox'
              aria-checked={_getIsSelected(row._id)}
              tabIndex={-1}
              key={row._id}
              selected={_getIsSelected(row._id)}
            >
              <TableCell padding='checkbox'>
                <Checkbox
                  checked={_getIsSelected(row._id)}
                  value={row._id}
                  onChange={handleItemChecked(row._id)}
                />
              </TableCell>
              <TableCell component='th' scope='row'>
                {row.name}
              </TableCell>
              <TableCell>{row.address}</TableCell>
              <TableCell>
                <Moment format='YYYY/MM/DD'>{row.timeStart}</Moment>
              </TableCell>
              <TableCell>
                <Moment format='YYYY/MM/DD'>{row.timeEnd}</Moment>
              </TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>
                <Tooltip title='Delete'>
                  <IconButton aria-label='delete' onClick={handleEdit(row._id)}>
                    <Edit />
                  </IconButton>
                </Tooltip>
                <Tooltip title='Delete'>
                  <IconButton
                    aria-label='delete'
                    onClick={handleDelete(row._id)}
                  >
                    <Delete />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default withRouter(TableEvent)
