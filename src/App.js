import React from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Meals from './components/Meals/Meals';
import {useSelector} from 'react-redux'
function App() {

  const cart = useSelector(state => state.cart)
  console.log(cart)

  return (
    <React.Fragment>
        <Hero />
        <Meals />
    </React.Fragment>
      
  );
}

export default App;
