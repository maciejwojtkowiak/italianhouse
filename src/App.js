import React, {useEffect} from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Meals from './components/Meals/Meals';
import {useSelector, useDispatch} from 'react-redux'
import Cart from './components/Cart/Cart';
import Overlay from './components/UI/Overlay';
import { cartActions } from './store/cart-slice';


let isInitial = true
function App() {
  const dispatch = useDispatch()
  const isShown = useSelector(state => state.cart.cartIsShown)
  const cartItems = useSelector(state => state.cart.items)
  const totalAmount = useSelector(state => state.cart.totalAmount)
  console.log(totalAmount)

  const loadedMeals = []
  useEffect(() => {
    const fetchCart = async () => {
      const response = await fetch('https://italianhouse-1aef0-default-rtdb.europe-west1.firebasedatabase.app/cart.json')
      const data = await response.json()
      const keys = Object.keys(data.cartItems)
      keys.forEach(key => loadedMeals.push(data.cartItems[key]) )
      dispatch(cartActions.replaceCart(loadedMeals))
      dispatch(cartActions.setFetchedTotalAmount(data.totalAmount))
    }
    fetchCart()
  }, [dispatch])
  
  useEffect(() => {
    if (isInitial) {
      isInitial = false
      return
    } 
    console.log(cartItems)
    fetch('https://italianhouse-1aef0-default-rtdb.europe-west1.firebasedatabase.app/cart.json', {
            method: 'PUT',
            body: JSON.stringify({cartItems: cartItems, totalAmount: totalAmount}),
            headers: {
                'content-type': 'application/json'
            }

        })
        
  }, [cartItems, totalAmount])


  return (
    <React.Fragment>
        <Hero />
        <Meals />
        {isShown &&  <Cart /> }
        {isShown &&  <Overlay /> }
    </React.Fragment>
      
  );
}

export default App;
