/** @format */

import React, { useState } from 'react'
import style from './Menu.module.scss'
import burger from '../../assets/icon/burger.png'
import drink from '../../assets/icon/drink.png'
import pizzaIcon from '../../assets/icon/pizzaIcon.png'
import sneck from '../../assets/icon/sneck.png'
import taco from '../../assets/icon/taco.png'
import MenuItem from './MenuItem'
import Popap from '../popap/Popap'
import Pizza from '../PizzaItem/Pizza'
import menuDis from './MenuSwith'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setCategoryId } from '../../redux/Slisers/FilterSlise'
import qs from 'qs'

const menuItem = [
  { icon: pizzaIcon, name: 'Pizza', path: 'pizza' },
  { icon: burger, name: 'Burger', path: 'burger' },
  { icon: sneck, name: 'Sneck', path: 'sneck' },
  { icon: taco, name: 'Taco', path: 'taco' },
  { icon: drink, name: 'Drinks', path: 'drinks' },
]

const Menu = ({ searchValue }) => {
  const dispatch = useDispatch()

  const categoryId = useSelector(state => state.filterSlice.categoryId)

  //  ///
  //
  //
  //

  const [active, setActive] = React.useState(0)
  const [route, setRoute] = React.useState('pizza')

  // const [sort, setSort] = useState('Popular')

  const onChangeCategory = i => {
    // setSort(i)
    console.log(i)
    dispatch(setCategoryId(i))
  }

  React.useEffect(() => {})

  const addMenu2 = id => {
    setActive(id)
  }

  const menuClick = link => {
    setRoute(link)
  }

  const onClickCategory = id => {}

  return (
    <>
      <div className={style.menu}>
        {menuItem.map((item, id) => (
          <MenuItem
            key={id}
            item={item}
            id={id}
            addMenu2={addMenu2}
            active={active}
            menuClick={menuClick}
          />
        ))}
      </div>
      <div>
        <Popap value={categoryId} onClickSort={onChangeCategory} />
      </div>
      <div className='food'>
        {menuDis(route, searchValue)}
        {/* <Pizza /> */}
      </div>
    </>
  )
}

export default Menu
