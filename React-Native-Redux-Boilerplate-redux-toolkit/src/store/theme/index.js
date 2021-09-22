/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import AsyncStorage from '@react-native-async-storage/async-storage'

const userSlice = createSlice({
  name: 'theme',
  initialState: 'light',
  reducers: {
    toggleTheme(_, action) {
      return action.payload
    },
   
  },
 
})

export const { toggleTheme } = userSlice.actions

export default userSlice.reducer

// Actions
export const changeTheme = (theme) => async (dispatch) => {
    dispatch(toggleTheme(theme));
};
