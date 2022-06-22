/** @format */

import React from 'react'

import style from './Basket.module.scss'
import { BsFillCartFill } from 'react-icons/bs'
import { BsTrash } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import BasketItem from './BasketItem'
import { clearItem } from '../../redux/Slisers/basketSlice'
import BasketEmpty from './BasketNone/BasketEmpty'

const Basket = () => {
  const dispatch = useDispatch()
  const { totalPrice, items } = useSelector(state => state.cartSlice)

  const onClickClear = () => {
    if (window.confirm('Really ?')) dispatch(clearItem())
  }

  return (
    <div style={{ marginTop: '30px', minHeight: '500px' }}>
      {items.length > 0 ? (
        <div>
          <h1 style={{ textAlign: 'center', margin: '30px' }}>
            <BsFillCartFill style={{ marginRight: '20px' }} />
            Basket
            <span
              onClick={onClickClear}
              className={style.cleare}
              style={{
                marginLeft: '25rem',
                fontSize: '20px',
                cursor: 'pointer',
              }}
            >
              <BsTrash style={{ marginRight: '15px' }} />
              Clear Basket
            </span>
          </h1>
          <div className={style.list}>
            {items.map(el => (
              <BasketItem key={el.id} {...el} />
            ))}
            <div className={style.total}>
              <Link to='/'>
                <button>GO Back</button>
              </Link>

              <p>
                Total sum: <b> {totalPrice}</b>$
              </p>
              <button>Send Order</button>
            </div>
          </div>
        </div>
      ) : (
        <BasketEmpty />
      )}
    </div>
  )
}

export default Basket
