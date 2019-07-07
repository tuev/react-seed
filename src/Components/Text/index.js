import React from 'react'

export default ({ text, color, size }) => (
  <span style={{ color, fontSize: size }}>{text}</span>
)
