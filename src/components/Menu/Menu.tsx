/** @format */

import React from 'react'
import style from './Menu.module.scss'
import burger from '../../assets/icon/burger.png'
import drink from '../../assets/icon/drink.png'
import pizzaIcon from '../../assets/icon/pizzaIcon.png'
import sneck from '../../assets/icon/sneck.png'
import taco from '../../assets/icon/taco.png'
import MenuItem from './MenuItem'
import Popap from '../popap/Popap'
import menuDis from './MenuSwith'
import { useSelector } from 'react-redux'
import { setCategoryId } from '../../redux/Slisers/FilterSlise'
import { RootState } from '../../redux/Store'

const menuItem = [
  { icon: pizzaIcon, name: 'Pizza', path: 'pizza' },
  { icon: burger, name: 'Burger', path: 'burger' },
  { icon: sneck, name: 'Sneck', path: 'sneck' },
  { icon: taco, name: 'Taco', path: 'taco' },
  { icon: drink, name: 'Drinks', path: 'drinks' },
]
type MenuProps = {
  searchValue: string
}

const Menu: React.FC<MenuProps> = ({ searchValue }) => {
  const categoryId = useSelector(
    (state: RootState) => state.filterSlice.categoryId
  )
  const { items, totalPrice } = useSelector(
    (state: RootState) => state.cartSlice
  )

  const isMounted = React.useRef(false)

  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items)
      const json1 = JSON.stringify(totalPrice)

      window.localStorage.setItem('basket', json)
      window.localStorage.setItem('total', json1)
    }
    isMounted.current = true
  }, [items, totalPrice])
  //  ///
  //
  //
  //

  const [active, setActive] = React.useState(0)
  const [route, setRoute] = React.useState('pizza')

  // const [sort, setSort] = useState('Popular')

  const onChangeCategory = (i: string) => {
    // setSort(i)

    setCategoryId(i)
  }

  React.useEffect(() => {})

  const addMenu2 = (id: number) => {
    setActive(id)
  }

  const menuClick = (link: string) => {
    setRoute(link)
  }

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
