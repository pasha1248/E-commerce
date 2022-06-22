/** @format */

import React from 'react'
import ContentLoader from 'react-content-loader'

const PizzaSkeleton = () => {
  return (
    <ContentLoader
      speed={1}
      width={250}
      height={530}
      viewBox='0 0 250 530'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
    >
      <circle cx='120' cy='124' r='114' />
      <rect x='49' y='250' rx='24' ry='24' width='145' height='21' />
      <rect x='169' y='272' rx='0' ry='0' width='16' height='2' />
      <circle cx='226' cy='438' r='22' />
      <rect x='7' y='419' rx='9' ry='9' width='61' height='34' />
      <rect x='348' y='583' rx='0' ry='0' width='23' height='12' />
      <rect x='8' y='292' rx='28' ry='28' width='228' height='116' />
    </ContentLoader>
  )
}

export default PizzaSkeleton
