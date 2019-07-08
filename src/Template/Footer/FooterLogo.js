import React from 'react'
import logo from './footerLogo.json'

export default class FooterLogo extends React.Component {
  render () {
    return (
      <ul className='__footer-logo'>
        {logo.map((item, idx, arr) => {
          const bullet =
            arr.length > 0 && idx < logo.length - 1 ? '__link-bullet' : null
          return (
            <li key={idx}>
              <a href={item.href} className={bullet}>
                {item.label}
              </a>
            </li>
          )
        })}
      </ul>
    )
  }
}
