import React from 'react'

export default ({ items = [] }) => (
  <div>
    {items.map(({ href, label } = {}, idx) => {
      return (
        <li key={idx}>
          <a href={href}>{label}</a>
        </li>
      )
    })}
  </div>
)
