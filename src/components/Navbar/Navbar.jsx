/** @format */

import React from 'react'

import style from './Navbar.module.scss'
import 'macro-css'

import { AiOutlineHome } from 'react-icons/ai'
import { BsCart2 } from 'react-icons/bs'
import { BsHeart } from 'react-icons/bs'
import { MdPlaylistAddCheck } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [active, setActive] = React.useState(1)
  return (
    <nav className={style.navbar}>
      <div className={`clear ${style.list}`}>
        <ul>
          <li
            onClick={() => setActive(1)}
            className={active === 1 && style.active}
          >
            <Link to='/'>
              <AiOutlineHome className={`${style.item} `} />
            </Link>
          </li>
          <br />
          <br />
          <li
            onClick={() => setActive(2)}
            className={active === 2 && style.active}
          >
            <Link to='/basket'>
              <BsCart2 className={style.item} />
            </Link>
          </li>
          <li
            onClick={() => setActive(3)}
            className={active === 3 && style.active}
          >
            <Link to='/follow'>
              <BsHeart className={style.item} />
            </Link>
          </li>
          <li
            onClick={() => setActive(4)}
            className={active === 4 && style.active}
          >
            <Link to='/orders'>
              <MdPlaylistAddCheck className={style.item} />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
