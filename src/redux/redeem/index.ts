import { createSlice } from '@reduxjs/toolkit';
import thunks from './thunks';
import { RootState } from '../store';
import Toast from "react-native-toast-message";

const initialValues = {
  success: false,
};

const slice = createSlice({
  name: 'redeem',
  initialState: initialValues,
  reducers: {
    chnageSuccess: (state, action) => { state.success = action.payload },
  },
  extraReducers: builder => {
    //doRedeemReward
    builder.addCase(thunks.doRedeemReward.fulfilled, (state, action) => {
      state.success = true
      Toast.show({
        type: "success",
        text1: 'Redeem Successfully',
      })
    });
    builder.addCase(thunks.doRedeemReward.rejected, (state, action: any) => {
      console.log(action.payload.data)
      Toast.show({
        type: "error",
        text1: action.payload.data.message,
      })
    })
  },
});

const Redeem = {
  thunks,
  slice,
};

export const selectSuccess = (state: RootState) => state.redeem.success;
export default Redeem;
