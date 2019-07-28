import React, { Component } from 'react'
import { Col } from 'reactstrap'
import classNames from 'classnames'

export default class SearchNav extends Component {
  render () {
    const { Dropdown, countList, keyIndex, ...restProps } = this.props

    const classItem = classNames('search__item', { 'border-right-0': keyIndex === countList - 1 })
    return (
      <Col lg={12 / +countList} md='12' className='p-0' >
        <div className={classItem} >
          <Dropdown {...restProps} />
        </div>
      </Col>
    )
  }
}
