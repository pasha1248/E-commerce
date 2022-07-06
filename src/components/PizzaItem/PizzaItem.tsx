/** @format */

import React, { useState } from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'
import style from './Pizza.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { addItem, CartItem } from '../../redux/Slisers/basketSlice'
import PizzaInfo from './PizzaInfo'
import { Link } from 'react-router-dom'
import { RootState } from '../../redux/Store'

type PizzaProps = {
  pizza: {
    id: string
    name: string
    price: number
    image: string
    info: string
  }
}

const PizzaItem: React.FC<PizzaProps> = ({ pizza }) => {
  const { id, name, price, image, info } = pizza

  const dispatch = useDispatch()
  const cartItem = useSelector((state: RootState) =>
    state.cartSlice.items.find((obj: any) => obj.id === id)
  )

  const [active, setActive] = useState<number>()
  const [activeSm, setActiveSm] = useState<number>()

  const addedCount = cartItem ? cartItem.count : 0

  const onClickAdd = () => {
    const item = {
      id,
      name,
      price,
      image,
      type: active,
      size: activeSm,
      count: 0,
    }
    dispatch(addItem(item))
  }
  const [inform, setInfo] = React.useState(false)

  return (
    <article>
      <img
        src={pizza.image}
        alt='pahoto'
        height={250}
        width={250}
        className={style.image}
        onClick={() => setInfo(!inform)}
      />
      {inform && <PizzaInfo info={info} setInfo={setInfo} />}
      <Link to={`/pizza/${id}`}>
        <h2>{pizza.name}</h2>
      </Link>
      <div className={`clear ${style.select}`}>
        <ul>
          <li
            className={active && active === 1 ? style.active : ''}
            onClick={() => setActive(1)}
          >
            thin
          </li>
          <li
            className={active && active === 2 ? style.active : ''}
            onClick={() => setActive(2)}
          >
            origin
          </li>
        </ul>
        <ul>
          <li
            className={activeSm && activeSm === 26 ? style.active : ''}
            onClick={() => setActiveSm(26)}
          >
            26
          </li>
          <li
            className={activeSm && activeSm === 30 ? style.active : ''}
            onClick={() => setActiveSm(30)}
          >
            30
          </li>
          <li
            className={activeSm && activeSm === 40 ? style.active : ''}
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
