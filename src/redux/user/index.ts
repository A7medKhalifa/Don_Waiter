import { EntityKeys } from '../schema';
import { createSlice } from '@reduxjs/toolkit';
import thunks from './thunks';
import { RootState } from '../store';
import Toast from "react-native-toast-message";
import AsyncStorage from '@react-native-async-storage/async-storage';


const initialValues = {
  currentUser: null,
  isAuth: false,
};

const slice = createSlice({
  name: EntityKeys.USERS,
  initialState: initialValues,
  reducers: {
    logout: () => initialValues,
  },
  extraReducers: builder => {
    //doSignIn
    builder.addCase(thunks.doSignIn.fulfilled, (state, action) => {
      AsyncStorage.setItem('USER_TOKEN', action.payload.data?.token)
      state.currentUser = action.payload?.data
      state.isAuth = true
    });
    builder.addCase(thunks.doSignIn.rejected, (state, action: any) => {
      console.log(action.payload.data)
      Toast.show({
        type: "error",
        text1: action.payload.data.message,
      })
    })
  }
})

const User = {
  thunks,
  slice,
  logout: slice.actions.logout,
};

export const selectCurrentUser = (state: RootState) => state.users.currentUser;
export default User;
