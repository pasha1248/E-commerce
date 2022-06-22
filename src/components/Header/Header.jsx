/** @format */
import 'macro-css'
import React from 'react'
import style from './Header.module.scss'
import { IoPizzaOutline } from 'react-icons/io5'
import { FiSearch } from 'react-icons/fi'
import debounce from 'lodash.debounce'
import { useSelector } from 'react-redux'

const Header = ({ searchValue, setSearchValue }) => {
  const [value, setValue] = React.useState('')
  const inputRef = React.useRef()
  const onClickClear = el => {
    setValue(el)
    testDobounce(el)
  }
  const testDobounce = React.useCallback(
    debounce(el => {
      setSearchValue(el)
    }, 350),
    []
  )

  return (
    <header className={style.header}>
      <div>
        <h2 className={style.right}>
          <IoPizzaOutline className={style.logo} /> Pizza U Pavla
        </h2>
      </div>
      <div className={style.left}>
        <input
          ref={inputRef}
          value={value}
          onChange={e => onClickClear(e.target.value)}
          type='text'
          placeholder='Search by food name'
          style={{ marginRight: '80px' }}
        />
        <FiSearch style={{ cursor: 'pointer' }} className={style.icon} />
      </div>
    </header>
  )
}

export default Header
