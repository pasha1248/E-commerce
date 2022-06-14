/** @format */

import React, { useState } from 'react'
import style from './Menu.module.scss'
import burger from '../../assets/icon/burger.png'
import drink from '../../assets/icon/drink.png'
import pizzaIcon from '../../assets/icon/pizzaIcon.png'
import sneck from '../../assets/icon/sneck.png'
import taco from '../../assets/icon/taco.png'
import MenuItem from './MenuItem'

const menuItem = [
  { icon: pizzaIcon, name: 'Pizza' },
  { icon: burger, name: 'Burger' },
  { icon: sneck, name: 'Sneck' },
  { icon: taco, name: 'Taco' },
  { icon: drink, name: 'Drinks' },
]

const Menu = () => {
  const [active, setActive] = React.useState(0)

  const addMenu2 = id => {
    setActive(id)
  }

  return (
    <div className={style.menu}>
      {menuItem.map((item, id) => (
        <MenuItem
          key={id}
          item={item}
          id={id}
          addMenu2={addMenu2}
          active={active}
        />
      ))}
    </div>
  )
}

export default Menu
