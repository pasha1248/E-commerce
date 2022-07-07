/** @format */

import React from 'react'
import 'macro-css'
import style from './Pizza.module.scss'
import PizzaItem from './PizzaItem'
import PizzaSkeleton from './PizzaSkeleton'
import { useSelector } from 'react-redux'
import { fetchPizza } from '../../redux/Slisers/pizzaSlise'
import { RootState, useAppDispatch } from '../../redux/Store'

type PizzaProps = {
  searchValue: string
}

const Pizza: React.FC<PizzaProps> = ({ searchValue }) => {
  const dispatch = useAppDispatch()
  // const [pizza, setPizza] = React.useState([])

  // const { searchValue } = React.useContext(MyContext)
  // console.log(searchValue)
  const { items, status } = useSelector((state: RootState) => state.pizzaSlice)

  React.useEffect(() => {
    dispatch(
      // @ts-ignore
      fetchPizza(items.data)
    )
  }, [items, dispatch])

  return (
    <div className={style.pizzaContainer}>
      {status === 'loading'
        ? [...new Array(6)].map((_, id) => <PizzaSkeleton key={id} />)
        : items
            .filter((el: any) =>
              el.name.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((pizza: any, id: any) => <PizzaItem key={id} pizza={pizza} />)}
    </div>
  )
}

export default Pizza
