/** @format */

import axios from 'axios'
import React from 'react'
import PizzaSkeleton from '../PizzaItem/PizzaSkeleton'
import BurgerItem from './BurgerItem'
import style from './Burger.module.scss'

const Burger = ({ searchValue }) => {
  const [burgers, setBurger] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    async function burgerData() {
      try {
        const burger = await axios.get(
          'https://62ac334c9fa81d00a7abe063.mockapi.io/burger'
        )

        setBurger(burger.data)
        setLoading(false)
        console.log(burger)
      } catch (error) {
        console.log(error)
      }
    }
    burgerData()
  }, [])
  return (
    <div className={style.pizzaContainer}>
      {' '}
      {loading
        ? [...new Array(6)].map((_, id) => <PizzaSkeleton key={id} />)
        : burgers
            .filter(el =>
              el.name.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((burger, id) => (
              <BurgerItem key={id} burger={burger} id={id} />
            ))}
    </div>
  )
}

export default Burger
