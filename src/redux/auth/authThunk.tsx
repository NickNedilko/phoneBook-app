import { createAsyncThunk } from "@reduxjs/toolkit"
// import { setAuthHeader } from "../../helpers/jwt";
import axios from "axios";
import { clearAuthHeader, setAuthHeader } from "../../helpers/jwt";
import {UserInfo} from "../../types/types"


export const signUp = createAsyncThunk(
    'auth/signUp', async(credentials: UserInfo, thunkAPI)=> {
        try {
        const {data} = await axios.post('api/auth/register', credentials)
            setAuthHeader(data.token)
        return data;
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.massage)
    }
    }
)
export const login = createAsyncThunk(
    'auth/login', async (credentials: Partial<UserInfo>, thunkAPI) => {
        try {
            const {data} = await axios.post('api/auth/login', credentials)
            setAuthHeader(data.token);
            return data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.massage)
        }
    }
);

export const logout = createAsyncThunk(
    'auth/logout', async (_, thunkAPI) => {
        try {
            await axios.post('api/auth/logout');
            clearAuthHeader();
        } catch (error:any) {
            return thunkAPI.rejectWithValue(error.massage)
            
        }
    }
)

export const getCurrentUser =  createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state:any = thunkAPI.getState();
    const persistedToken = state.auth.token;
      console.log(persistedToken)
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      // If there is a token, add it to the HTTP header and perform the request
      setAuthHeader(persistedToken);
        const res = await axios.get('api/auth/current');
       
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);