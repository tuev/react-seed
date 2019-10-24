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
    () => Math.ceil(skip / process.env.REACT_APP_PAGE_LIMIT),
    [skip]
  )
  const totalPage = useMemo(
    () => Math.ceil(total / process.env.REACT_APP_PAGE_LIMIT),
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
  const disabledPreviousDots = useMemo(() => rangePage[0] === 1, [rangePage])
  const disabledNextDots = useMemo(() => last(rangePage) === totalPage, [
    rangePage,
    totalPage
  ])
  const disabledPrevious = useMemo(() => rangePage[0] - 1 === currentPage, [
    currentPage,
    rangePage
  ])
  const disabledNext = useMemo(() => last(rangePage) - 1 === currentPage, [
    currentPage,
    rangePage
  ])

  const _handleFirstPage = useCallback(
    () => currentPage > 1 && onPageSelect(0),
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
    () => currentPage < totalPage && onPageSelect(totalPage - 1),
    [currentPage, onPageSelect, totalPage]
  )
  const _handleSelectPage = useCallback(
    page => () => currentPage !== page && onPageSelect(page),
    [currentPage, onPageSelect]
  )
  return totalPage ? (
    <Pagination className='d-flex justify-content-center'>
      {!disabledPrevious && (
        <>
          <PaginationItem
            disabled={disabledPrevious}
            onClick={_handleFirstPage}
            style={{ cursor: !disabledPrevious ? 'pointer' : 'unset' }}
          >
            <PaginationLink first href='#' />
          </PaginationItem>
          <PaginationItem
            disabled={disabledPrevious}
            onClick={_handlePreviousPage}
            style={{ cursor: !disabledPrevious ? 'pointer' : 'unset' }}
          >
            <PaginationLink previous href='#' />
          </PaginationItem>
        </>
      )}
      {!disabledPreviousDots && <span className='mx-2'>...</span>}
      {rangePage.map(item => (
        <PaginationItem
          active={currentPage === item - 1}
          key={item}
          onClick={_handleSelectPage(item - 1)}
        >
          <PaginationLink>{item}</PaginationLink>
        </PaginationItem>
      ))}
      {!disabledNextDots && <span className='mx-2'>...</span>}
      {!disabledNext && (
        <>
          <PaginationItem
            disabled={disabledNext}
            onClick={_handleNextPage}
            style={{ cursor: !disabledNext ? 'pointer' : 'unset' }}
          >
            <PaginationLink next href='#' />
          </PaginationItem>
          <PaginationItem
            disabled={disabledNext}
            onClick={_handleLastPage}
            style={{ cursor: !disabledNext ? 'pointer' : 'unset' }}
          >
            <PaginationLink last href='#' />
          </PaginationItem>
        </>
      )}
    </Pagination>
  ) : (
    <div />
  )
}

export default AppPagination
