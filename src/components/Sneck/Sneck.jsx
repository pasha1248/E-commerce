/** @format */

import React from 'react'
import style from './Sneck.module.scss'
import { AiFillPlusCircle } from 'react-icons/ai'

const sneckArray = [
  {
    name: 'FRENCH FRIES',
    image:
      'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/04/french-fries-recipe.jpg',
    price: 5,
  },
  {
    name: 'CHIPS',
    image:
      'https://assets.epicurious.com/photos/54ab46066529d92b2c0329f4/master/w_1280%2Cc_limit/51252630_potato-chips_1x1.jpg',
    price: 7,
  },
  {
    name: 'SNACK',
    image:
      'https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/2018_sweet-sallty-snack-mix_5817_600x600.jpg?ext=.jpg',
    price: 6.5,
  },
]

const Sneck = () => {
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

export default Sneck
