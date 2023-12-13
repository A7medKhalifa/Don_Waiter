import { createSlice } from '@reduxjs/toolkit';
import thunks from './thunks';
import { RootState } from '../store';
import Toast from "react-native-toast-message";
import { Alert } from 'react-native';

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
      
    });
    builder.addCase(thunks.doRedeemReward.rejected, (state, action: any) => {
      console.log(action.payload.data)
      Alert.alert('', action.payload.data.message, [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
    })


    //doReducePoints
    builder.addCase(thunks.doReducePoints.fulfilled, (state, action) => {
      state.success = true
      Alert.alert('', 'Points reduced successfully', [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
    });
    builder.addCase(thunks.doReducePoints.rejected, (state, action: any) => {
      console.log(action.payload.data)
      Alert.alert('', action.payload.data.message, [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
    })
  },
});

const Redeem = {
  thunks,
  slice,
};

export const selectSuccess = (state: RootState) => state.redeem.success;
export default Redeem;
