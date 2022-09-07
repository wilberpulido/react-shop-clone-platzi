import { useState } from "react";

const initialState = {
  cart:[]
}

const useInitialState = () => {
  const [state,setState] = useState(initialState);
  console.log(state.cart)
  const addToCart = (payload) => {
    let quantity = state.cart.filter((orden)=>{
      return orden.item.id === payload.id;
    }).length;

    if (quantity === 0){
      setState({
        ...state,
        cart:
        [...state.cart,
          {
            item:payload,
            quantity: quantity + 1,
          }
          
        ]
      });
    }else{
      let newStateCart = state.cart.map(orden => {
        if (orden.item.id === payload.id ) {
          orden.quantity = orden.quantity + 1; 
        }
        return orden;
      });
      setState({
        ...state,
        cart: newStateCart,
      });
    }
  
  }
  const removeFromCart = (payload) =>{
    setState({
      ...state,
      cart:state.cart.filter(orden => orden.item.id != payload.id ),
    })
  }

  return {
    state,
    addToCart,
    removeFromCart,
  }
}

export default useInitialState;