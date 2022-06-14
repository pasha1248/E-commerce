/** @format */

import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Navbar from './components/Navbar/Navbar'
import NavbarRight from './components/NavbarRight/NavbarRight'
import Pizza from './components/PizzaItem/Pizza'
import Slider from './components/Slider/Slider'

function App() {
  return (
    <div className='App'>
      <div>
        <Navbar />
      </div>

      <div>
        <Header />
        <Slider />
        <Menu />
        <Pizza />
      </div>
      <div>
        <NavbarRight />
      </div>
    </div>
  )
}

export default App
