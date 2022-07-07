/** @format */

import React from 'react'
import delivery from '../../assets/delivery.png'
import style from './Slider.module.scss'

const Slider = () => {
  return (
    <div>
      <article className={style.slider}>
        <img src={delivery ? delivery : ''} alt='photo1' height={200} />
        <div className={style.text}>
          <h2>Very fast delivery</h2>
          <p>
            If we do not deliver the order in{' '}
            <span style={{ color: '#fb9300', fontSize: '20px' }}>20</span>{' '}
            minutes we will refund your money
          </p>
          {/* <button>Learn More</button> */}
        </div>
      </article>
    </div>
  )
}

export default Slider
