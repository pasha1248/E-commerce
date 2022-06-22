/** @format */

import React, { useState } from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'
import style from './Pizza.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { addItem } from '../../redux/Slisers/basketSlice'

const PizzaItem = ({ pizza }) => {
  const { id, name, price, image } = pizza

  const dispatch = useDispatch()
  const cartItem = useSelector(state =>
    state.cartSlice.items.find(obj => obj.id === id)
  )

  const [active, setActive] = useState(null)
  const [activeSm, setActiveSm] = useState(null)

  const addedCount = cartItem ? cartItem.count : 0

  const onClickAdd = () => {
    const item = {
      id,
      name,
      price,
      image,
      type: active,
      size: activeSm,
    }
    dispatch(addItem(item))
  }

  return (
    <article>
      <img
        src={pizza.image}
        alt='pahoto'
        height={250}
        width={250}
        className={style.image}
      />
      <h2>{pizza.name}</h2>
      <div className={`clear ${style.select}`}>
        <ul>
          <li
            className={active === 0 ? style.active : ''}
            onClick={() => setActive(0)}
          >
            thin
          </li>
          <li
            className={active === 1 ? style.active : ''}
            onClick={() => setActive(1)}
          >
            origin
          </li>
        </ul>
        <ul>
          <li
            className={activeSm === 26 ? style.active : ''}
            onClick={() => setActiveSm(26)}
          >
            26
          </li>
          <li
            className={activeSm === 30 ? style.active : ''}
            onClick={() => setActiveSm(30)}
          >
            30
          </li>
          <li
            className={activeSm === 40 ? style.active : ''}
            onClick={() => setActiveSm(40)}
          >
            40
          </li>
        </ul>
      </div>
      <div className={style.price}>
        <div>
          <span style={{ color: '#fb9300', fontWeight: '600' }}>$</span>
          <span>{pizza.price}</span>
        </div>
        <button onClick={() => onClickAdd()}>
          <AiFillPlusCircle className={style.icon} />
          <span className={style.count}>{addedCount > 0 && addedCount}</span>
        </button>
      </div>
    </article>
  )
}

export default PizzaItem
