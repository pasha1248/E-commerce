/** @format */

import React from 'react'
import style from './NavbarRight.module.scss'
import { useSelector } from 'react-redux'
import { BsCartFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const NavbarRight = () => {
  const { totalPrice, items } = useSelector(state => state.cartSlice)
  const { name, image, count } = items
  console.log(totalPrice)

  return (
    <nav className={style.nav}>
      <h3>
        {totalPrice} <span style={{ color: '#FB9300' }}>$</span>
      </h3>
      <Link to='/basket'>
        <h4>
          <BsCartFill className={style.icon} />
          <span className={style.count}>{items.length}</span>
        </h4>
      </Link>
      <div className={style.list}>
        {items.map(el => (
          <div className={style.item}>
            <img src={el.image} alt='pahoto' height={50} />
            <h5>{el.name}</h5>
            <p>
              <span style={{ color: '#FB9300' }}>x</span>
              {el.count}
            </p>
          </div>
        ))}
      </div>
    </nav>
  )
}

export default NavbarRight
