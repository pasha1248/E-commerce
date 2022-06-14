/** @format */

import React from 'react'

import style from './Navbar.module.scss'
import 'macro-css'

import { AiOutlineHome } from 'react-icons/ai'
import { BsCart2 } from 'react-icons/bs'
import { BsHeart } from 'react-icons/bs'
import { MdPlaylistAddCheck } from 'react-icons/md'

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <div className={`clear ${style.list}`}>
        <ul>
          <li className={style.active}>
            <AiOutlineHome className={`${style.item} `} />
          </li>
          <br />
          <br />
          <li>
            <BsCart2 className={style.item} />
          </li>
          <li>
            <BsHeart className={style.item} />
          </li>
          <li>
            <MdPlaylistAddCheck className={style.item} />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
