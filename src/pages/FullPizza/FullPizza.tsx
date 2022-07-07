/** @format */

import { useParams } from 'react-router-dom'
import React from 'react'
import axios from 'axios'
import style from './FullPizza.module.scss'

const FullPizza: React.FC = () => {
  const { id } = useParams()
  const [pizza, setPizza] = React.useState<{
    image: string
    name: string
    info: string
    price: string
  }>()

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          'https://62ac334c9fa81d00a7abe063.mockapi.io/pizza/' + id
        )
        setPizza(data)
      } catch (error) {
        alert('Error')
        console.log(error)
      }
    }

    fetchPizza()
  }, [id])

  if (!pizza) {
    return <>Loading...</>
  }
  return (
    <div className={style.pizza}>
      <img src={pizza.image} alt='photo45' />
      <h2>{pizza.name}</h2>
      <p>{pizza.info}</p>
      <h4>{pizza.price}</h4>
    </div>
  )
}

export default FullPizza
