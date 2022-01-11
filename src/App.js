import React from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Meals from './components/Meals/Meals';
import {useSelector} from 'react-redux'
import Cart from './components/Cart/Cart';
function App() {

  const isShown = useSelector(state => state.cart.cartIsShown)

  return (
    <React.Fragment>
        <Hero />
        <Meals />
        {isShown && <Cart />}
    </React.Fragment>
      
  );
}

export default App;
