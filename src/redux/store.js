import UserReducer from "./slice/userSlice.js"
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    User: UserReducer,
    // Add more slices as needed
  },

});


export default store