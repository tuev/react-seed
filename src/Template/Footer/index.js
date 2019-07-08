import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import FooterCategory from './FooterCategory'
import FooterShortcut from './FooterShortcut'
import FooterLogo from './FooterLogo'
import './footer.scss'

export default class index extends Component {
  render () {
    return (
      <div className='footer'>
        <Container>
          <Row>
            <FooterCategory />
          </Row>
          <Row>
            <Col sm='12' lg='2'>
              <FooterShortcut />
            </Col>
            <Col sm='12' lg='10'>
              <FooterLogo />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
