/** @format */
import Burger from '../burger/Burger'
import Drinks from '../Drinks/Drinks'
import Pizza from '../PizzaItem/Pizza'
import Sneck from '../Sneck/Sneck'
import Taco from '../Taco/Taco'

/** @format */

function menuDis(el, searchValue) {
  if (el === 'pizza') {
    return <Pizza searchValue={searchValue} />
  }
  if (el === 'burger') {
    return <Burger searchValue={searchValue} />
  }
  if (el === 'sneck') {
    return <Sneck />
  }
  if (el === 'taco') {
    return <Taco />
  }
  if (el === 'drinks') {
    return <Drinks />
  }
}

export default menuDis
