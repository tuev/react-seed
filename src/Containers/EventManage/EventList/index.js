import React, { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { isEmpty, get } from 'lodash'
import Paper from '@material-ui/core/Paper'
import Text from 'Components/Text'
import EnhancedTableToolbar from './EnhancedTableToolbar'
import TableEvent from './TableEvent'
import TablePagination from './TablePagination'

const EventList = () => {
  const [selectedIds, toggleSelectedId] = useState([])

  const selectedCount = useMemo(() => selectedIds.length, [selectedIds])
  const isEmptyEvent = useSelector(state =>
    isEmpty(get(state, 'event.data.pagination.items'))
  )

  return (
    <div>
      {isEmptyEvent ? (
        <Text fontSize='32px' fontWeight='600' lineHeight='128px'>
          NO DATA
        </Text>
      ) : (
        <Paper>
          <EnhancedTableToolbar
            numSelected={selectedCount}
            selectedIds={selectedIds}
          />
          <TableEvent
            selectedIds={selectedIds}
            toggleSelectedId={toggleSelectedId}
            numSelected={selectedCount}
          />
          <TablePagination />
        </Paper>
      )}
    </div>
  )
}

export default EventList
