/** @format */
import 'macro-css'
import React from 'react'
import style from './Header.module.scss'
import { IoPizzaOutline } from 'react-icons/io5'
import { FiSearch } from 'react-icons/fi'

const Header = () => {
  return (
    <header className={style.header}>
      <div>
        <h2 className={style.right}>
          <IoPizzaOutline className={style.logo} /> Pizza U Pavla
        </h2>
      </div>
      <div className={style.left}>
        <input
          type='text'
          placeholder='Search by food name'
          style={{ marginRight: '80px' }}
        />
        <FiSearch style={{ cursor: 'pointer' }} />
      </div>
    </header>
  )
}

export default Header
