/** @format */

import React, { useState } from 'react'
import style from './Menu.module.scss'
import { IoIosArrowDroprightCircle } from 'react-icons/io'

const MenuItem = ({ item, id, addMenu2, active }) => {
  const addMenu = () => {
    addMenu2(id)
  }

  return (
    <article
      onClick={() => addMenu()}
      className={`${style.item} ${active === id ? style.active : ''}`}
    >
      <img src={item.icon} alt='photo' height={30} className={style.icon} />
      <h4>{item.name}</h4>
      <IoIosArrowDroprightCircle className={style.arrow} />
    </article>
  )
}

export default MenuItem
