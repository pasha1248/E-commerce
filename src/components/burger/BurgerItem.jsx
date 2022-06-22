/** @format */

import React from 'react'
import style from './Burger.module.scss'
import { AiFillPlusCircle } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { addItem } from '../../redux/Slisers/basketSlice'
import { useSelector } from 'react-redux'

const BurgerItem = ({ burger }) => {
  const { image, name, price, id } = burger
  const dispatch = useDispatch()
  const cartItem = useSelector(state =>
    state.cartSlice.items.find(obj => obj.id === id)
  )

  const addedCount = cartItem ? cartItem.count : 0

  const onClickAdd = () => {
    const item = {
      image,
      name,
      price,
      id,
    }
    dispatch(addItem(item))
  }

  return (
    <article>
      <img
        src={burger.image}
        alt='pahoto'
        height={250}
        width={250}
        className={style.image}
      />
      <h2>{burger.name}</h2>
      <div className={style.price}>
        <div>
          <span style={{ color: '#fb9300', fontWeight: '600' }}>$</span>
          <span>{burger.price}</span>
        </div>
        <button onClick={onClickAdd}>
          <AiFillPlusCircle className={style.icon} />
          <span className={style.count}>{addedCount > 0 && addedCount}</span>
        </button>
      </div>
    </article>
  )
}

export default BurgerItem
