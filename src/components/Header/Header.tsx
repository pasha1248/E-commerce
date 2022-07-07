/** @format */
import 'macro-css'
import React from 'react'
import style from './Header.module.scss'
import { IoPizzaOutline } from 'react-icons/io5'
import { FiSearch } from 'react-icons/fi'
import debounce from 'lodash.debounce'

type HeaderProps = {
  searchValue: string
  setSearchValue: (el: string) => void
}

const Header: React.FC<HeaderProps> = ({ searchValue, setSearchValue }) => {
  const [value, setValue] = React.useState('')
  const inputRef = React.useRef<HTMLInputElement>(null)
  const onClickClear = (el: string) => {
    setValue(el)
    testDobounce(el)
  }
  const testDobounce = React.useCallback(
    debounce((el: string) => {
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
