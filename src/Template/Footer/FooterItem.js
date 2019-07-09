import React from 'react'

export default ({ items }) => (
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
