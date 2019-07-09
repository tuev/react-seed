import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import category from './footerCategory.json'
import FooterItem from './FooterItem'

export default class FooterCategory extends React.Component {
  _renderFooterItem = (item, idx) => {
    const childProps = { ...item }
    return (
      <Col key={idx} md='3' sm='6' xs='12' className='footer__category'>
        <h3 className='footer__category subject'>{item.subject}</h3>
        <ul>
          <FooterItem {...childProps} />
        </ul>
      </Col>
    )
  };

  render () {
    return (
      <Container>
        <Row>{category.map(this._renderFooterItem)}</Row>
      </Container>
    )
  }
}
