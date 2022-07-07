/** @format */

const getBasketFromLocalStorage = () => {
  const data = window.localStorage.getItem('basket')

  return data ? JSON.parse(data) : []
}

export default getBasketFromLocalStorage
