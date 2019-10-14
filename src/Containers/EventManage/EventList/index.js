import React from 'react'
import TablePagination from '@material-ui/core/TablePagination'
import Paper from '@material-ui/core/Paper'
import EnhancedTableToolbar from './EnhancedTableToolbar'
import TableEvent from './TableEvent'
import EventListStyles from './EventList.style'

const headCells = [
  {
    id: 'eventName',
    numeric: false,
    disablePadding: true,
    label: 'Event Name'
  },
  {
    id: 'address',
    numeric: false,
    disablePadding: false,
    label: 'Address'
  },
  {
    id: 'timeStart',
    numeric: false,
    disablePadding: false,
    label: 'Time start'
  },
  {
    id: 'timeEnd',
    numeric: false,
    disablePadding: false,
    label: 'Time end '
  },
  { id: 'status', numeric: false, disablePadding: false, label: 'Status' }
]

function desc (a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

function stableSort (array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index])
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0])
    if (order !== 0) return order
    return a[1] - b[1]
  })
  return stabilizedThis.map(el => el[0])
}

function getSorting (order, orderBy) {
  return order === 'desc'
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy)
}

const EventList = ({ redirect, eventList = {} }) => {
  const classes = EventListStyles()
  const [order, setOrder] = React.useState('asc')
  const [orderBy, setOrderBy] = React.useState('eventName')
  const [selected, setSelected] = React.useState([])
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)

  const handleRequestSort = (event, property) => {
    const isDesc = orderBy === property && order === 'desc'
    setOrder(isDesc ? 'asc' : 'desc')
    setOrderBy(property)
  }

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelecteds = eventList.map(n => n.name)
      setSelected(newSelecteds)
      return
    }
    setSelected([])
  }

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name)
    let newSelected = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      )
    }

    setSelected(newSelected)
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const isSelected = name => selected.indexOf(name) !== -1

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, eventList.length - page * rowsPerPage)

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableEvent
          redirect={redirect}
          eventList={eventList}
          classes={classes}
          selected={selected}
          order={order}
          orderBy={orderBy}
          handleSelectAllClick={handleSelectAllClick}
          handleRequestSort={handleRequestSort}
          stableSort={stableSort}
          getSorting={getSorting}
          page={page}
          rowsPerPage={rowsPerPage}
          isSelected={isSelected}
          handleClick={handleClick}
          emptyRows={emptyRows}
          headCells={headCells}
        />
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component='div'
          count={eventList.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'previous page'
          }}
          nextIconButtonProps={{
            'aria-label': 'next page'
          }}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  )
}

export default EventList
