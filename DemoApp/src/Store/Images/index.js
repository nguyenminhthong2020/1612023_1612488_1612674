/* eslint-disable */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
//import { imageApiInstance as ImageAPI } from '../../Services/api'
// import {axiosInstance} from '../../Services/api'
import axios from 'axios'

import { Config } from '@/Config'
const axiosInstance1 = axios.create({
  baseURL: Config.API_URL,
  timeout: 5000,
  headers: {'Authorization': '563492ad6f91700001000001508feadfb19843f8a908441cf08d33dd'}
});

const initialState = []
// Actions
// curated?per_page=4&page=1
export const getImagesAsync = createAsyncThunk(
    'images/get',
    async ({per_page, page}, {rejectWithValue}) => {
        try{
        res = await axiosInstance1.get(`curated?per_page=${per_page}&page=${page}`);
        return res.data.photos
      }catch(err){
        if(!err.data){
                  throw err
                }
                return rejectWithValue(err.data)
      }
    }
)

const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    // testDispatch(state, action){
    //   state.test = action.payload
    // }
    // setUser(state, action) {
    //   state.user=action.payload;
    // },
    // removeUser(state, action) {
    //   state.user = null;
    //   state.loggedIn = false;
    // },
  },
  extraReducers: {
    [getImagesAsync.fulfilled]: (state, action) => {
      return [...action.payload]//action.payload.photos; //.src.original
    },
   
  },
})

//export const { testDispatch } = imagesSlice.actions

export default imagesSlice.reducer

