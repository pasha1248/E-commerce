/** @format */

import React from 'react'
import style from './Pizza.module.scss'

type infoProps = {
  info: string
  setInfo: (el: boolean) => void
}

const PizzaInfo: React.FC<infoProps> = ({ info, setInfo }) => {
  return (
    <div className={style.info} onClick={() => setInfo(!info)}>
      <h4>{info}</h4>
    </div>
  )
}

export default PizzaInfo
