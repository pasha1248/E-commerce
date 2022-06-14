/** @format */

import React, { useState } from 'react'
import 'macro-css'
import style from './Pizza.module.scss'
import PizzaItem from './PizzaItem'

const pizzaArray = [
  {
    image:
      'https://pizzaplace.com.ua/wp-content/uploads/2015/06/IMG_4848-400x400.jpg',
    name: 'Margsrita',
    price: '20',
  },
  {
    image:
      'https://sushifan.com.ua/image/cache/catalog/pizza/Burger%2030-500x500.png',
    name: 'Margsrita',
    price: '20',
  },
  {
    image:
      'https://pizzaplace.com.ua/wp-content/uploads/2015/06/IMG_4772-400x400.jpg',
    name: 'Margsrita',
    price: '20',
  },
]

const Pizza = () => {
  const [active, setActive] = useState(0)

  return (
    <div className={style.pizzaContainer}>
      {pizzaArray.map((pizza, id) => (
        <PizzaItem pizza={pizza} id={id} active={active} />
      ))}
    </div>
  )
}

export default Pizza
