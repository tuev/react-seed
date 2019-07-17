import React from 'react'
import classNames from 'classnames'
import logo from './footerLogo.json'

export default class FooterLogo extends React.Component {
  _renderFooterLogoItem = ({ href, label } = {}, idx, arr) => {
    const isBullet = arr.length > 0 && idx < logo.length - 1
    const bulletClass = classNames('footer__logo', { 'link-bullet': isBullet })
    return (
      <li key={idx}>
        <a href={href} className={bulletClass}>
          {label}
        </a>
      </li>
    )
  }

  render () {
    return (
      <ul className='footer__logo'>{logo.map(this._renderFooterLogoItem)}</ul>
    )
  }
}
