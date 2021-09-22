/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import AsyncStorage from '@react-native-async-storage/async-storage'

const langSlice = createSlice({
  name: 'lang',
  initialState: 'en',
  reducers: {
    updateLang(_, action) {
      return action.payload
    },
  },
})

export const { updateLang } = langSlice.actions

export default langSlice.reducer

// Actions
export const changeLang = (lang) => async (dispatch) => {
  dispatch(updateLang(lang))
}
