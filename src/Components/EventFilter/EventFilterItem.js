import React from 'react'
import { DropdownItem } from 'reactstrap'
import classNames from 'classnames'

const EventFilterItem = ({ items = [], setInput }) => {
  const _setInput = (val) => () => setInput(val)
  const _className = (e) => classNames(
    'event-filter__item',
    { 'disabled event-filter__item--disabled': !e }
  )

  return (
    <div>
      { items.map((item, idx) => <DropdownItem
        key={idx}
        className={_className(item.value)}
        onClick={_setInput(item.label)}
      >
        {item.label}
      </DropdownItem>
      )}
    </div>
  )
}

export default EventFilterItem
