import { cartActions } from "./cart-slice"
import { uiActions } from "./ui-slice"


const awaitTimeout = delay => 
new Promise(resolve => setTimeout(resolve, delay));

export const fetchCartData = (message) => {
    return async (dispatch) => {
        dispatch(cartActions.isCartBeingFetched(true))
        const fetchCart = async () => {
            const response = await fetch('https://italianhouse-1aef0-default-rtdb.europe-west1.firebasedatabase.app/cart.json')
            const data = await response.json()
            return data
            
          }
          try {
            const data = await fetchCart()
            dispatch(cartActions.replaceCart(data.cartItems || []))
            dispatch(cartActions.setFetchedTotalAmount(data.totalAmount || 0))
            dispatch(uiActions.showNotification({message: message, type:'FETCH'}))
            
    
          } catch (err) {
            console.log(err)
          }

          dispatch(cartActions.isCartBeingFetched(false))
          clearTimeout(awaitTimeout)
          await awaitTimeout(2000)
          dispatch(uiActions.hideNotification())
    }
}

export const sendData = (cart, message) => {
    return async (dispatch) => {
        
        
            const putData = async () => {
                const response = await fetch('https://italianhouse-1aef0-default-rtdb.europe-west1.firebasedatabase.app/cart.json', {
                    method: 'PUT',
                    body: JSON.stringify({cartItems: cart.items, totalAmount: cart.totalAmount}),
                    headers: {
                        'content-type': 'application/json'
                    }
                })
    
                if (!response.ok) {
                    console.log('something went wrong')
                }
              }
    
              try {
                  dispatch(uiActions.showNotification({message: message, type:'CHANGE'}))
                  await putData()
                  
              } catch(err) {
                dispatch(uiActions.showNotification('Something went wrong with adding item to cart'))
                  console.log(err)
              }
              clearTimeout(awaitTimeout)
              await awaitTimeout(2000)
              dispatch(uiActions.hideNotification())      
    }
}


export const hideNotification = () => {
    return async (dispatch) => {
        dispatch(uiActions.hideNotification)
    }
}
