import { configureStore } from '@reduxjs/toolkit';
import favReducer from '../ForReducers/MyFavouriteSlice'
import cartReducer from '../ForReducers/CartSlice'
const store = configureStore({
  reducer: {
    fav: favReducer,
    cart: cartReducer,
  },
});


export default store;

