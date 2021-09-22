/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API } from 'services'
// import AsyncStorage from '@react-native-async-storage/async-storage'



// Actions

export const signin = createAsyncThunk(
  'users/login',
  async ({ email, password }, { rejectWithValue }) => {
    try { 
      const res = await API.post('user/login', {
        email,
        password,
      })
      
      return res;
    } catch (err) {
      if(!err.data){
        throw err
      }
      return rejectWithValue(err.data)
    }
  },
)


const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    loggedIn: false,
  },
  reducers: {
    setUser(state, action) {
      state.user=action.payload;
    },
    removeUser(state, action) {
      state.user = null;
      state.loggedIn = false;
    },
  },
  extraReducers: {
    [signin.fulfilled]: (state, action) => {
      state.loggedIn = true;
      state.user = action.payload.userInfo
    },
   
  },
})

export const { setUser, removeUser } = userSlice.actions

export default userSlice.reducer

