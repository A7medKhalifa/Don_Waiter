import { createAsyncThunk } from '@reduxjs/toolkit';
import TicketsAPI from './api';

const doRedeemReward: any = createAsyncThunk<any, any, any>(
  'auth/redeemReward',
  async (data: any, thunkApi: any) => {
    try {
      const response = await TicketsAPI.redeemReward(data);
      console.log(JSON.stringify(response.data))
      if (
        response.status == 401 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
        response.status == 500 ||
        response.status == 503
      ) {
        throw response;
      }
      return response.data
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)

const doReducePoints: any = createAsyncThunk<any, any, any>(
  'auth/reducePoints',
  async (data: any, thunkApi: any) => {
    try {
      const response = await TicketsAPI.reducePoints(data);
      console.log(JSON.stringify(response.data))
      if (
        response.status == 401 ||
        response.status == 422 ||
        response.status == 404 ||
        response.status == 403 ||
        response.status == 500 ||
        response.status == 503
      ) {
        throw response;
      }
      return response.data
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)


const AppThunks = {
  doRedeemReward,
  doReducePoints
};

export default AppThunks;
