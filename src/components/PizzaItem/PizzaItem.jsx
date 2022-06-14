/** @format */

import React, { useState } from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'
import style from './Pizza.module.scss'

const PizzaItem = ({ pizza }) => {
  const [active, setActive] = useState(null)
  const [activeSm, setActiveSm] = useState(null)

  const [count, setCount] = useState(0)

  return (
    <active>
      <img
        src={pizza.image}
        alt='pahoto'
        height={250}
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
            className={activeSm === 0 ? style.active : ''}
            onClick={() => setActiveSm(0)}
          >
            26
          </li>
          <li
            className={activeSm === 1 ? style.active : ''}
            onClick={() => setActiveSm(1)}
          >
            30
          </li>
          <li
            className={activeSm === 2 ? style.active : ''}
            onClick={() => setActiveSm(2)}
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
        <button onClick={() => setCount(count + 1)}>
          <AiFillPlusCircle className={style.icon} />
          <span className={style.count}>{count}</span>
        </button>
      </div>
    </active>
  )
}

export default PizzaItem
