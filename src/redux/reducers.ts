import {combineReducers} from '@reduxjs/toolkit';
import User from './user';
import loadingSlice from './_loading';
import Redeem from './redeem';
const combinedReducer = combineReducers({
  _loading: loadingSlice.reducer,

  [User.slice.name]: User.slice.reducer,
  [Redeem.slice.name]: Redeem.slice.reducer,
});

export default combinedReducer;
