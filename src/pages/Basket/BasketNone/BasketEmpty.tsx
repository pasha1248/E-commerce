/** @format */

import React from 'react'
import { Link } from 'react-router-dom'
import style from './BasketEmpty.module.scss'

const BasketEmpty: React.FC = () => {
  return (
    <div className={style.basket}>
      <h1>Basket is Empty</h1>
      <img
        src='https://img.freepik.com/free-vector/no-data-concept-illustration_114360-2506.jpg?t=st=1655836586~exp=1655837186~hmac=7f998c2fa2536800808a52871ccb5c4118834bab23a1bf93b7413081bb53adcf&w=1800'
        alt='photo'
        height={400}
      />
      <p>Please add goodies to the basket</p>
      <Link to='/'>
        <button>GO Back</button>
      </Link>
    </div>
  )
}

export default BasketEmpty
