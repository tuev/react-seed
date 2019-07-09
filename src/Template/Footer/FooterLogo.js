import React from 'react'
import logo from './footerLogo.json'

export default class FooterLogo extends React.Component {
  _renderFooterLogoItem = (item, idx, arr) => {
    const bullet =
      arr.length > 0 && idx < logo.length - 1
        ? 'footer logo link-bullet'
        : 'footer logo'
    return (
      <li key={idx}>
        <a href={item.href} className={bullet}>
          {item.label}
        </a>
      </li>
    )
  };
  render () {
    return (
      <ul className='footer logo'>{logo.map(this._renderFooterLogoItem)}</ul>
    )
  }
}
