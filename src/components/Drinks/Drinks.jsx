/** @format */

import React from 'react'
import style from './Drinks.module.scss'
import { AiFillPlusCircle } from 'react-icons/ai'

const sneckArray = [
  {
    name: 'Coca Cola',
    image:
      'https://img.fozzyshop.com.ua/39588-thickbox_default/napitok-coca-cola-1l.jpg',
    price: 2.4,
  },
  {
    name: 'Sprite',
    image:
      'https://icf.listex.info/med/8159849e-6eac-8f11-ed07-889f4827a8e9.jpg',
    price: 2.4,
  },
  {
    name: 'Fanta',
    image:
      'https://img.fozzyshop.com.ua/39614-large_default/napitok-fanta-orange-15l.jpg',
    price: 2.3,
  },
]

const Drinks = () => {
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

export default Drinks
