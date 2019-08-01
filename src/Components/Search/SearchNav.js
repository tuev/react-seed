import React, { Component } from 'react'
import { Col } from 'reactstrap'
import classNames from 'classnames'
import DropdownEvent from '../SearchDropdownEvent'

export default class SearchNav extends Component {
  render () {
    const { DropdownItem, countList, keyIndex, ...restProps } = this.props
    const classItem = classNames('search__item', {
      'border-right-0': keyIndex === countList - 1
    })
    return (
      <Col lg='4' md='12' className='p-0'>
        <div className={classItem}>
          <DropdownEvent DropdownItem={DropdownItem} {...restProps} />
        </div>
      </Col>
    )
  }
}
