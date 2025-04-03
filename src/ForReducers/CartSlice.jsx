import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    cartItems: [],
  };


  const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        //adding an item to the cart.
        addItemToCart(state, action) {
            const existingItem = state.cartItems.find(item => item.id === action.payload.id);
            if (existingItem) {
              existingItem.quantity += 1;
            } else {
              state.cartItems.push({ ...action.payload, quantity: 1 });
            }
          },
          // removing an item from the cart.
          removeItemFromCart(state, action) {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
          },
          // clearing the entire cart.
          clearCart(state) {
            state.cartItems = [];
          },
          // increasing the quantity of a specific item in the cart.
          //It finds the item in the shopping cart whose identifier (id) matches the identifier passed in the action payload.
          //If the item is found (itemToIncrease is not undefined), it increments the quantity property of that item by 1.
           increaseItemQuantity(state, action) {
            const itemToIncrease = state.cartItems.find(item => item.id === action.payload);
            if (itemToIncrease) {
              itemToIncrease.quantity += 1;
            }
          },
          // decreasing the quantity of a specific item in the cart.
          //It attempts to find the item in the shopping cart whose identifier (id) matches the identifier provided in the action payload.
          //If the item is found (itemToDecrease is not undefined) and its quantity is greater than 1, it decrements the quantity property of that item by 1.
          decreaseItemQuantity(state, action) {
            const itemToDecrease = state.cartItems.find(item => item.id === action.payload);
           
            if (itemToDecrease && itemToDecrease.quantity > 1) {
              itemToDecrease.quantity -= 1;
            }
            else if(itemToDecrease.quantity ==1){
              state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
            }
            
          },
    }
  });


  // returns an object containing the generated action creators and the reducer function.
  export const {
    addItemToCart,
    removeItemFromCart,
    clearCart,
    increaseItemQuantity,
    decreaseItemQuantity,
  } = CartSlice.actions;


  export default CartSlice.reducer;