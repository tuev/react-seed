import React from 'react'
import ContentLoader from 'react-content-loader'

const AvatarPlaceholder = () => (
  <ContentLoader height={150} width={300}>
    <circle cx='30' cy='30' r='30' />

    <rect x='75' y='13' rx='4' ry='4' width='100' height='13' />
  </ContentLoader>
)

export default AvatarPlaceholder
