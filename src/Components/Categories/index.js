import React, { Component } from 'react'
import Slider from 'react-slick'

export default class Responsive extends Component {
  render () {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }
    return (
      <div>
        <h2> Responsive </h2>
        <Slider {...settings}>
          <div style={{ width: '100% ', display: 'inline-block' }}>
            <h3
              style={{
                background: '#5f9ea0',
                color: '#fff',
                'font-size': '36px',
                'line-height': '100px',
                margin: '10px',
                padding: '2%',
                position: 'relative',
                'text-align': 'center'
              }}
            >
              1
            </h3>
          </div>
          <div style={{ width: '100% ', display: 'inline-block' }}>
            <h3
              style={{
                background: '#5f9ea0',
                color: '#fff',
                'font-size': '36px',
                'line-height': '100px',
                margin: '10px',
                padding: '2%',
                position: 'relative',
                'text-align': 'center'
              }}
            >
              2
            </h3>
          </div>
          <div style={{ width: '100% ', display: 'inline-block' }}>
            <h3
              style={{
                background: '#5f9ea0',
                color: '#fff',
                'font-size': '36px',
                'line-height': '100px',
                margin: '10px',
                padding: '2%',
                position: 'relative',
                'text-align': 'center'
              }}
            >
              3
            </h3>
          </div>
          <div style={{ width: '100% ', display: 'inline-block' }}>
            <h3
              style={{
                background: '#5f9ea0',
                color: '#fff',
                'font-size': '36px',
                'line-height': '100px',
                margin: '10px',
                padding: '2%',
                position: 'relative',
                'text-align': 'center'
              }}
            >
              4
            </h3>
          </div>
          <div style={{ width: '100% ', display: 'inline-block' }}>
            <h3
              style={{
                background: '#5f9ea0',
                color: '#fff',
                'font-size': '36px',
                'line-height': '100px',
                margin: '10px',
                padding: '2%',
                position: 'relative',
                'text-align': 'center'
              }}
            >
              5
            </h3>
          </div>
          <div style={{ width: '100% ', display: 'inline-block' }}>
            <h3
              style={{
                background: '#5f9ea0',
                color: '#fff',
                'font-size': '36px',
                'line-height': '100px',
                margin: '10px',
                padding: '2%',
                position: 'relative',
                'text-align': 'center'
              }}
            >
              6
            </h3>
          </div>
          <div style={{ width: '100% ', display: 'inline-block' }}>
            <h3
              style={{
                background: '#5f9ea0',
                color: '#fff',
                'font-size': '36px',
                'line-height': '100px',
                margin: '10px',
                padding: '2%',
                position: 'relative',
                'text-align': 'center'
              }}
            >
              7
            </h3>
          </div>
          <div style={{ width: '100% ', display: 'inline-block' }}>
            <h3
              style={{
                background: '#5f9ea0',
                color: '#fff',
                'font-size': '36px',
                'line-height': '100px',
                margin: '10px',
                padding: '2%',
                position: 'relative',
                'text-align': 'center'
              }}
            >
              8
            </h3>
          </div>
          <div style={{ width: '100% ', display: 'inline-block' }}>
            <h3
              style={{
                background: '#5f9ea0',
                color: '#fff',
                'font-size': '36px',
                'line-height': '100px',
                margin: '10px',
                padding: '2%',
                position: 'relative',
                'text-align': 'center'
              }}
            >
              9
            </h3>
          </div>
        </Slider>
      </div>
    )
  }
}
