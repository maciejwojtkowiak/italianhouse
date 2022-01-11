import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import DetailTable from './DetailTable'
const CartItems = () => {
    const items = useSelector(state => state.cart.items)
    console.log(items)
    return (
        <React.Fragment>
            <DetailTable />
            <div>
                {items.map(item => 
                <CartItem key={item.id} name={item.name} price={item.price} 
                quantity={item.quantity} totalPrice={item.totalPrice} />)}
            </div>
        </React.Fragment>
        
    )
}

export default CartItems