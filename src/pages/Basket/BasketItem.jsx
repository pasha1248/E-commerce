/** @format */

import React from 'react'
import style from './Basket.module.scss'
import { AiFillMinusCircle } from 'react-icons/ai'
import { AiFillPlusCircle } from 'react-icons/ai'
import { AiFillCloseCircle } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import {
  addItem,
  minuseItem,
  removeItem,
} from '../../redux/Slisers/basketSlice'

const BasketItem = ({ id, name, price, image, count, type, size }) => {
  const dispatch = useDispatch()

  const onClickPlus = () => {
    dispatch(
      addItem({
        id,
      })
    )
  }

  const onClickMinus = () => {
    if (count === 1) {
      dispatch(removeItem(id))
    } else {
      dispatch(minuseItem(id))
    }
  }
  const onClickRemove = () => {
    if (window.confirm('Really ?')) dispatch(removeItem(id))
  }
  return (
    <article className={style.item}>
      <div className={style.itemLeft}>
        <img src={image} alt='Photo' height={70} />
        <div className={style.pizzaInfo}>
          <h3>{name}</h3>
          <p>
            {type === 0 ? 'thin' : 'origin'}, {size}
          </p>
        </div>
      </div>
      <div className={style.itemCound}>
        <AiFillMinusCircle onClick={onClickMinus} className={style.icon} />
        {count}
        <AiFillPlusCircle onClick={onClickPlus} className={style.icon} />
      </div>
      <div>
        <b style={{ fontSize: '20px' }}>$</b>
        <b>{price * count}</b>
      </div>
      <AiFillCloseCircle className={style.icon} onClick={onClickRemove} />
    </article>
  )
}

export default BasketItem
