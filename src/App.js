import React, {useEffect} from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Meals from './components/Meals/Meals';
import {useSelector, useDispatch} from 'react-redux'
import Cart from './components/Cart/Cart';
import Overlay from './components/UI/Overlay';
import About from './components/About/About'
import {fetchCartData} from './store/cart-actions'
import { sendData } from './store/cart-actions'
import Notification from './components/UI/Notification'

let isInitial = true
function App() {
  const dispatch = useDispatch()
  const isShown = useSelector(state => state.cart.cartIsShown)
  const cart = useSelector(state => state.cart)
  const notification = useSelector(state => state.ui.notification)
  
  useEffect(() => {
    dispatch(fetchCartData())
  }, [dispatch])
  
  useEffect(() => {
    if (isInitial) {
      isInitial = false
      return
    }

    if (cart.changed) {
      dispatch(sendData(cart))
    }
   
  }, [dispatch, cart])


  return (
    <React.Fragment>
        <Notification message={notification.message}  />
        <Hero />
        <Meals />
        <About />
        {isShown &&  <Cart /> }
        {isShown &&  <Overlay /> }
    </React.Fragment>
      
  );
}

export default App;
