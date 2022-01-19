import React, {useEffect, useRef} from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Meals from './components/Meals/Meals';
import {useSelector, useDispatch} from 'react-redux'
import Cart from './components/Cart/Cart';
import Overlay from './components/UI/Overlay';
import About from './components/About/About'
import {fetchCartData, sendData} from './store/cart-actions'
import Notification from './components/UI/Notification'
import { uiActions } from './store/ui-slice';


let isInitial = true
function App() {
  const dispatch = useDispatch()
  const isShown = useSelector(state => state.cart.cartIsShown)
  const cartIsChanged = useSelector(state => state.cart.changed)
  const cartItems = useSelector(state => state.cart.items)
  const totalAmount = useSelector(state => state.cart.totalAmount)
  const notification = useSelector(state => state.ui.notification)
  const notificationIsShown = useSelector(state => state.ui.notificationIsShown)
  const isAdded = useSelector(state => state.cart.added)
  const scrollToMeals = useRef(null)

  let message = isAdded ? 'Item was added to cart' : 'Item was removed from cart'
  
  
  useEffect(() => {
    dispatch(fetchCartData('cart is fetched'))
    let hideNotification;
    hideNotification = setTimeout(() => {dispatch(uiActions.hideNotification())}, 1000)
    return () => {
      clearTimeout(hideNotification)
    }
  }, [dispatch])
  
  useEffect(() => {
   
    if (isInitial) {
      isInitial = false
      return
    }

    

    if (cartIsChanged) {
      let hideNotification;
      dispatch(sendData({items: cartItems, totalAmount: totalAmount}, message ))
         
      hideNotification = setTimeout(() => {dispatch(uiActions.hideNotification())}, 1000)

    return () => {
      clearTimeout(hideNotification)
    }
   
  }}, [dispatch, cartIsChanged, cartItems, totalAmount, message])


  return (
    <React.Fragment>
        {<Notification message={notification.message} type={notification.type}  />}
        <Hero meals={scrollToMeals} />
        <Meals refProp={scrollToMeals} />
        <About />
        {isShown &&  <Cart /> }
        {isShown &&  <Overlay /> } 
    </React.Fragment>
      
  );
}

export default App;
