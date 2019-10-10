import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Checkbox from '@material-ui/core/Checkbox'
import EnhancedTableHead from './EnhancedTableHead'
import EditEvent from './EditEvent'

const TableEvent = ({
  redirect,
  classes,
  selected,
  order,
  orderBy,
  handleSelectAllClick,
  handleRequestSort,
  eventList,
  stableSort,
  getSorting,
  page,
  rowsPerPage,
  isSelected,
  handleClick,
  emptyRows,
  headCells
}) => {
  console.log(eventList, redirect)
  return (
    <div className={classes.tableWrapper}>
      <Table
        className={classes.table}
        aria-labelledby='tableTitle'
        size='medium'
      >
        <EnhancedTableHead
          classes={classes}
          numSelected={selected.length}
          order={order}
          orderBy={orderBy}
          onSelectAllClick={handleSelectAllClick}
          onRequestSort={handleRequestSort}
          rowCount={eventList.length}
          headCells={headCells}
        />
        <TableBody>
          {stableSort(eventList, getSorting(order, orderBy))
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row, index) => {
              const isItemSelected = isSelected(row.name)
              const labelId = `enhanced-table-checkbox-${index}`

              return (
                <TableRow
                  hover
                  // onClick={event => handleClick(event, row.name)}
                  role='checkbox'
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  key={row.name}
                  selected={isItemSelected}
                >
                  <TableCell padding='checkbox'>
                    <Checkbox
                      checked={isItemSelected}
                      inputProps={{ 'aria-labelledby': labelId }}
                    />
                  </TableCell>
                  <TableCell
                    component='th'
                    id={labelId}
                    scope='row'
                    padding='none'
                  >
                    {row.name}
                  </TableCell>
                  <TableCell align='right'>
                    <EditEvent redirect={redirect(row._id)} _id={row._id} />
                  </TableCell>
                </TableRow>
              )
            })}
          {emptyRows > 0 && (
            <TableRow style={{ height: 49 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}

export default TableEvent
