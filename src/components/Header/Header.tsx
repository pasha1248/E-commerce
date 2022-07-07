/** @format */
import 'macro-css'
import React from 'react'
import style from './Header.module.scss'
import { IoPizzaOutline } from 'react-icons/io5'
import { FiSearch } from 'react-icons/fi'
import _debounce from 'lodash.debounce'

type HeaderProps = {
  searchValue: string
  setSearchValue: any
}

const Header: React.FC<HeaderProps> = ({ searchValue, setSearchValue }) => {
  const [value, setValue] = React.useState('')
  const inputRef = React.useRef<HTMLInputElement>(null)
  const onClickClear = (el: React.ChangeEvent<HTMLInputElement>) => {
    setValue(el.target.value)
    testDobounce(el.target.value)
  }
  const testDobounce = React.useCallback(
    (i: string) =>
      _debounce((i: string) => {
        setSearchValue(i)
      }, 350),
    [setSearchValue]
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
          onChange={onClickClear}
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
