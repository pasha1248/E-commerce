/** @format */

import React, { useEffect, useState } from 'react'
import 'macro-css'
import style from './Pizza.module.scss'
import PizzaItem from './PizzaItem'
import PizzaSkeleton from './PizzaSkeleton'
import axios from 'axios'
import { MyContext } from '../../App'
import { useSelector, useDispatch } from 'react-redux'
import { setItems, fetchPizza } from '../../redux/Slisers/pizzaSlise'

// const pizzaArray = [
//   {
//     image:
//       'https://pizzaplace.com.ua/wp-content/uploads/2015/06/IMG_4848-400x400.jpg',
//     name: 'HAWAIIAN LUAU',
//     price: '12',
//   },
//   {
//     image:
//       'https://sushifan.com.ua/image/cache/catalog/pizza/Burger%2030-500x500.png',
//     name: 'MEAT LOVERS',
//     price: '20',
//   },
//   {
//     image:
//       'https://gogopizza.by/wp-content/uploads/2019/05/IMG_4023-600x600.jpg',
//     name: 'PEPPERONI LOVERS',
//     price: '22',
//   },
//   {
//     image:
//       'https://media-cdn.tripadvisor.com/media/photo-p/1a/e9/94/10/caption.jpg',
//     name: 'SUPREME LOVERS',
//     price: '23',
//   },
//   {
//     image:
//       'https://valentinos.com/wp-content/uploads/2019/06/valentinos-special.png',
//     name: 'TEXAS BBQ',
//     price: '22',
//   },
//   {
//     image:
//       'https://pizzaplace.com.ua/wp-content/uploads/2015/06/IMG_4772-400x400.jpg',
//     name: 'CHICKEN SUPREME',
//     price: '20',
//   },
//   {
//     image:
//       'https://valentinos.com/wp-content/uploads/2020/04/Pizza-Overhead-DueSorella-3717.png',
//     name: 'SANTA FE',
//     price: '16',
//   },
//   {
//     image:
//       'https://valentinos.com/wp-content/uploads/2019/08/bacon-cheeseburger.png',
//     name: 'CHICKEN BBQ',
//     price: '13',
//   },
//   {
//     image: 'https://valentinos.com/wp-content/uploads/2019/06/hamburger.png',
//     name: 'TROPICAL CHICKEN',
//     price: '20',
//   },
//   {
//     image:
//       'https://media.istockphoto.com/photos/pizza-margarita-with-cheese-top-view-isolated-on-white-background-picture-id1168754685?k=20&m=1168754685&s=612x612&w=0&h=XauWtcSx53Ey0yswLWggNGQi7gmTjba0TXloXO4NAIs=',
//     name: 'PLAIN CHEESE',
//     price: '21',
//   },
//   {
//     image:
//       'https://www.kindpng.com/picc/m/702-7027913_pizza-chicken-png-transparent-png.png',
//     name: 'SUPREME LOVERS',
//     price: '22',
//   },
//   {
//     image: 'https://valentinos.com/wp-content/uploads/2019/06/cheese.png',

//     name: 'FOUR CHEESES',
//     price: '10',
//   },
// ]

// const burgerArray = [
//   {
//     image:
//       'http://proprofs-cdn.s3.amazonaws.com/images/FC/user_images/1878936/3960366298.jpg',
//     name: 'BACON KING',
//     price: '12',
//   },
//   {
//     image: 'https://thumbs.dreamstime.com/b/hamburger-22939858.jpg',
//     name: 'CHEESEBURGER',
//     price: '20',
//   },
//   {
//     image:
//       'https://thumbs.dreamstime.com/b/%D0%B1%D0%BE-%D1%8C%D1%88%D0%BE%D0%B9-%D0%B1%D1%83%D1%80%D0%B3%D0%B5%D1%80-43062448.jpg',
//     name: 'BACON SHEESEBURGER',
//     price: '22',
//   },
//   {
//     image:
//       'https://www.seekpng.com/png/full/187-1873240_in-n-out-fries-view-image-five-guys.png',
//     name: 'BIG KING',
//     price: '23',
//   },
//   {
//     image:
//       'https://i.pinimg.com/originals/f6/19/12/f6191283a133c99642c1c41af52248e2.png',
//     name: 'DOUBLE CHEESEBURGER',
//     price: '22',
//   },
//   {
//     image:
//       'https://www.nightburger.lviv.ua/api/store/product/b_anderson_1/image.png',
//     name: 'HAMBURGER',
//     price: '20',
//   },
// ]

const Pizza = ({ searchValue }) => {
  const sort = useSelector(state => state.filterSlice.categoryId)

  const dispatch = useDispatch()
  const [pizza, setPizza] = React.useState([])

  // const { searchValue } = React.useContext(MyContext)
  // console.log(searchValue)
  const { items, status } = useSelector(state => state.pizzaSlice)

  React.useEffect(() => {
    dispatch(fetchPizza(pizza.data))
  }, [])

  return (
    <div className={style.pizzaContainer}>
      {status === 'loading'
        ? [...new Array(6)].map((_, id) => <PizzaSkeleton key={id} />)
        : items
            .filter(el =>
              el.name.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((pizza, id) => <PizzaItem key={id} pizza={pizza} id={id} />)}
    </div>
  )
}

export default Pizza
