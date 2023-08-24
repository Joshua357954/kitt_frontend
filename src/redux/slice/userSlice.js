// src/slices/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {name:"Jamville"}
    // picture:'',
    // name: 'Samuella',
    // gender: '',
    // email: '',
    // schoolName: '',
    // course: '',
    
  },
  reducers: {
    updateProfile: (state,action) => {
      state.user = action.payload
    }

  },
});

export const { updateProfile } = userSlice.actions;
export default userSlice.reducer;
