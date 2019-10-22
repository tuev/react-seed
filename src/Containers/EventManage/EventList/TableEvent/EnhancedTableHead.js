import React, { useCallback, useMemo, useEffect, useState } from 'react'
import {
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Checkbox
} from '@material-ui/core'
import { useSelector } from 'react-redux'
import { get, trimStart } from 'lodash'
import { requestEventHandler } from 'Redux/Event/event.action'
import useAuthorizationRequest from 'Hooks/useAuthorizationRequest'

const headCells = [
  { id: 'name', label: 'Event Name' },
  { id: 'address', label: 'Address' },
  { id: 'timeStart', label: 'Time start' },
  { id: 'timeEnd', label: 'Time end ' },
  { id: 'status', label: 'Status' },
  { id: 'Action', label: 'Action' }
]

const EnhancedTableHead = ({ numSelected, selectAll }) => {
  const [sortKey, toggleSort] = useState('')
  const [sortOrder, toggleSortOrder] = useState('')

  const [_getEventData] = useAuthorizationRequest(
    requestEventHandler,
    { options: { params: { sort: `${sortOrder}${sortKey}` } } },
    { author: true }
  )
  const createSortHandler = (property, orderInfo) => event => {
    const order = orderInfo === 'asc' ? '-' : ''
    toggleSort(property)
    toggleSortOrder(order)
  }

  const handleSelectAll = useCallback(() => selectAll(), [selectAll])
  const orderData = useSelector(
    state => get(state, 'event.data.pagination.options.sort', ''),
    []
  )

  const orderBy = useMemo(() => trimStart(orderData, '-'), [orderData])

  const order = useMemo(
    () => {
      const isDescending = orderData.split('')[0] === '-'
      return isDescending ? 'desc' : 'asc'
    },
    [orderData]
  )

  useEffect(() => _getEventData(), [_getEventData, sortKey, sortOrder])
  const getSortInfo = useCallback(
    headCell => (orderBy === headCell.id ? order : false),
    [order, orderBy]
  )

  return (
    <TableHead>
      <TableRow>
        <TableCell padding='checkbox'>
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < 9}
            checked={numSelected === 9}
            onChange={handleSelectAll}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            align='left'
            sortDirection={getSortInfo(headCell)}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={order}
              onClick={createSortHandler(headCell.id, getSortInfo(headCell))}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

export default EnhancedTableHead
