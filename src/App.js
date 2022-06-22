/** @format */
import React from 'react'

import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Navbar from './components/Navbar/Navbar'
import NavbarRight from './components/NavbarRight/NavbarRight'
import Pizza from './components/PizzaItem/Pizza'
import Popap from './components/popap/Popap'
import Slider from './components/Slider/Slider'
import { Routes, Route } from 'react-router-dom'
import Basket from './pages/Basket/Basket'
import Follow from './pages/Follow/Follow'
import Orders from './pages/Orders/Orders'

export const MyContext = React.createContext(null)

function App() {
  const [searchValue, setSearchValue] = React.useState('')
  return (
    <div className='App'>
      <MyContext.Provider value={searchValue}>
        <div>
          <Navbar />
        </div>

        <div className='content'>
          <Header searchValue={searchValue} setSearchValue={setSearchValue} />
          <Slider />
          <Routes>
            <Route
              path='/'
              element={<Menu searchValue={searchValue} />}
            ></Route>
            <Route path='/basket' element={<Basket />} />
            <Route path='/follow' element={<Follow />} />
            <Route path='/orders' element={<Orders />} />
          </Routes>
        </div>
        <div>
          <NavbarRight />
        </div>
      </MyContext.Provider>
    </div>
  )
}

export default App
