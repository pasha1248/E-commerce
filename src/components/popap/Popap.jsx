/** @format */

import React from 'react'
import style from './Popap.module.scss'
import { useSelector, useDispatch } from 'react-redux'

const Popap = ({ onClickSort, value }) => {
  const dispatch = useDispatch()
  const sort = useSelector(state => state.filterSlice.sort)

  const [open, setOpened] = React.useState(false)
  const [selected, setSelected] = React.useState('Popular')

  const sortRef = React.useRef()

  const add = e => {
    onClickSort(e)
    setOpened(false)
  }

  React.useEffect(() => {
    const handleClickOutside = event => {
      if (!event.path.includes(sortRef.current)) {
        setOpened(false)
      }
    }
    document.body.addEventListener('click', handleClickOutside)

    return () => {
      document.body.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <div ref={sortRef} className={`${style.pop} clear`}>
      <div className={style.popap}>
        <b>Sort by...</b>{' '}
        <span onClick={() => setOpened(!open)} style={{ cursor: 'pointer' }}>
          {value}
        </span>
      </div>

      {open && (
        <div className={style.popapItem}>
          <ul>
            <li onClick={() => add('Popular')}>Popular</li>
            <li onClick={() => add('Name')}>Name</li>
            <li onClick={() => add('Price')}>Price</li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Popap
