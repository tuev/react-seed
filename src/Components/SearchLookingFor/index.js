import React from 'react'
import LookingForDropdown from './LookingForDropdown'

const SearchLookingFor = () => (
  <div className='d-flex flex-column  align-items-start'>
    <div>
      <div>Looking For</div>
      <div style={{ width: '100%' }}>
        <input
          type='search'
          placeholder='Event'
          style={{
            backgroundColor: '#1e0a3c',
            border: '1px solid red',
            borderLeft: '0px',
            borderRight: '0px',
            borderTop: '0px',
            color: '#fff',
            width: '100%',
            fontSize: '1.125rem',
            lineHeight: '1.5rem',
            fontWeight: '600'
          }}
        />
      </div>
    </div>
    <div><LookingForDropdown /></div>
  </div>
)

export default SearchLookingFor
