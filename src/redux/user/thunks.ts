import UserAPI from './API';
import { createAsyncThunk } from '@reduxjs/toolkit';

const doSignIn: any = createAsyncThunk<any, any, any>(
  'auth/login',
  async (data: any, thunkApi: any) => {
    try {
      const response = await UserAPI.signIn(data);
      // console.log(JSON.stringify(response.data))
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




const AuthThunks = {
  doSignIn,
};

export default AuthThunks;
