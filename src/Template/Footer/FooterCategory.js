import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import category from './footerCategory.json'
import FooterItem from './FooterItem'

export default class FooterCategory extends React.Component {
  render () {
    return (
      <Container>
        <Row>
          {category.map((item, idx) => {
            const childProps = { ...item, key: idx }
            return (
              <Col key={idx} md='3' sm='6' xs='12' className='__category'>
                <h3 className='_subject'>{item.subject}</h3>
                <ul>
                  <FooterItem {...childProps} />
                </ul>
              </Col>
            )
          })}
        </Row>
      </Container>
    )
  }
}
