import React from 'react'

export default ({ items = [] }) => (
  <div>
    {items.map((item, idx) => {
      return (
        <div
          key={idx}
          className='event__item'
          style={{
            width: '350px',
            height: '350px',
            padding: '12px 8px'
          }}
        >
          <div className='image' style={{ width: '100%', height: '50%' }}>
            <img
              src={item.image}
              alt={item.alt}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <div
            className='content'
            style={{
              width: '100%',
              height: '50%',
              backgroundColor: 'lightblue',
              padding: '24px 0px 24px 0px',
              'text-align': 'left'
            }}
          >
            <div style={{ display: 'inline-block', 'padding-right': '16px' }}>
              <p>{item.month}</p>
              <p>{item.date}</p>
            </div>
            <div style={{ display: 'inline-block' }}>
              <p>{item.title}</p>
              <p>{item.content}</p>
              <p>{'- Somewhere...?'}</p>
              <p>{'- Free or Premium ?'}</p>
            </div>
          </div>
        </div>
      )
    })}
  </div>
)
