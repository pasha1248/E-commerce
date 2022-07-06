/** @format */

import React from 'react'

const getTotalFromLocalStorage = () => {
  const data = window.localStorage.getItem('total')

  return data ? JSON.parse(data) : 0
}

export default getTotalFromLocalStorage
