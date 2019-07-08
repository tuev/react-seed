import React from 'react'

export default class FooterCategoryItem extends React.Component {
  render () {
    const { items } = this.props
    return (
      <div>
        {items.map((item, idx) => {
          return (
            <li key={idx}>
              <a href={item.href}>{item.label}</a>
            </li>
          )
        })}
      </div>
    )
  }
}
