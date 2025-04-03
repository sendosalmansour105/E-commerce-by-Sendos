import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favItems: [],
};


const MyFavouriteSlice = createSlice({
  name: 'fav',
  initialState,
  reducers: {
    //adding an item to the MyFavourite.
    addItemToMyFavourite(state, action) {
      const existingItem = state.favItems.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.favItems.push({ ...action.payload, quantity: 1 });
      }
    },
    // removing an item from the MyFavourite.
    removeItemFromMyFavourite(state, action) {
      state.favItems = state.favItems.filter(item => item.id !== action.payload);
    },
    // clearing the entire MyFavourite.
    clearMyFavourite(state) {
      state.favItems = [];
    },
    

  }
})


export const {
  addItemToMyFavourite,
  removeItemFromMyFavourite,
  clearMyFavourite,
} = MyFavouriteSlice.actions;


export default MyFavouriteSlice.reducer;