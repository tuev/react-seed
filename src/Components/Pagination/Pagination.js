import React, { useMemo, useCallback } from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import { last } from 'lodash'
import { flow } from 'lodash/fp'

const _getPageRange = ({ currentPage, limit = 5, total }) => {
  const minPage = currentPage - 2 < 1 ? 1 : currentPage - 2
  const maxPage = currentPage + 2 > total ? total : currentPage + 2

  if (maxPage === total) {
    return {
      minPage: maxPage - limit < 1 ? 1 : maxPage - limit + 1,
      maxPage
    }
  }
  if (minPage === 1) {
    return {
      minPage,
      maxPage: minPage + limit > total ? total : minPage + limit - 1
    }
  }
  return {
    minPage,
    maxPage
  }
}

const _getPageItems = ({ minPage = 0, maxPage = 0 } = {}) =>
  Array.apply(null, Array(maxPage - minPage + 1)).map(
    (_, index) => index + minPage
  )

const AppPagination = ({ skip, total, onPageSelect }) => {
  const currentPage = useMemo(
    () => Math.floor(skip / process.env.REACT_APP_PAGE_LIMIT) || 1,
    [skip]
  )
  const totalPage = useMemo(
    () => Math.floor(total / process.env.REACT_APP_PAGE_LIMIT),
    [total]
  )
  const rangePage = useMemo(
    () =>
      flow(
        _getPageRange,
        _getPageItems
      )({ currentPage, total: totalPage }),
    [currentPage, totalPage]
  )
  const disabledPrevious = useMemo(() => rangePage[0] === 1, [rangePage])
  const disabledNext = useMemo(() => last(rangePage) === totalPage, [
    rangePage,
    totalPage
  ])

  const _handleFirstPage = useCallback(
    () => currentPage > 1 && onPageSelect(1),
    [currentPage, onPageSelect]
  )
  const _handlePreviousPage = useCallback(
    () => currentPage > 1 && onPageSelect(currentPage - 1),
    [currentPage, onPageSelect]
  )
  const _handleNextPage = useCallback(
    () => currentPage < totalPage && onPageSelect(currentPage + 1),
    [currentPage, onPageSelect, totalPage]
  )
  const _handleLastPage = useCallback(
    () => currentPage < totalPage && onPageSelect(totalPage),
    [currentPage, onPageSelect, totalPage]
  )
  const _handleSelectPage = useCallback(
    page => () => currentPage !== page && onPageSelect(page),
    [currentPage, onPageSelect]
  )

  return totalPage ? (
    <Pagination className='d-flex justify-content-center'>
      <PaginationItem disabled={disabledPrevious} onClick={_handleFirstPage}>
        <PaginationLink first href='#' />
      </PaginationItem>
      <PaginationItem disabled={disabledPrevious} onClick={_handlePreviousPage}>
        <PaginationLink previous href='#' />
      </PaginationItem>
      {!disabledPrevious && <span className='mx-2'>...</span>}
      {rangePage.map(item => (
        <PaginationItem
          active={currentPage === item}
          key={item}
          onClick={_handleSelectPage(item)}
        >
          <PaginationLink>{item}</PaginationLink>
        </PaginationItem>
      ))}
      {!disabledNext && <span className='mx-2'>...</span>}
      <PaginationItem disabled={disabledNext} onClick={_handleNextPage}>
        <PaginationLink next href='#' />
      </PaginationItem>
      <PaginationItem disabled={disabledNext} onClick={_handleLastPage}>
        <PaginationLink last href='#' />
      </PaginationItem>
    </Pagination>
  ) : (
    <div />
  )
}

export default AppPagination
