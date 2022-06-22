/** @format */

import React from 'react'
import style from './Taco.module.scss'
import { AiFillPlusCircle } from 'react-icons/ai'

const sneckArray = [
  {
    name: 'CASA MARGARITA',
    image:
      'https://www.burritos.com.ua/image/cache/catalog/food/tako/chicken-350x350.jpg',
    price: 6,
  },
  {
    name: 'TIPPY TOP MARGARITA',
    image:
      'https://www.burritos.com.ua/image/cache/catalog/food/tako/beef-350x350.jpg',
    price: 7,
  },
  {
    name: 'CASA',
    image:
      'https://www.burritos.com.ua/image/cache/catalog/food/burrito/premium-350x350.jpg',
    price: 9.5,
  },
]

const Taco = () => {
  return (
    <div className={style.pizzaContainer}>
      {sneckArray.map((snack, id) => (
        <article key={id}>
          <img
            src={snack.image}
            alt='pahoto'
            height={250}
            width={250}
            className={style.image}
          />
          <h2>{snack.name}</h2>
          <div className={style.price}>
            <div>
              <span style={{ color: '#fb9300', fontWeight: '600' }}>$</span>
              <span>{snack.price}</span>
            </div>
            <button>
              <AiFillPlusCircle className={style.icon} />
              <span className={style.count}>0</span>
            </button>
          </div>
        </article>
      ))}
    </div>
  )
}

export default Taco
