import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";
import { clearAuthHeader, setAuthHeader } from "../../helpers/jwt";
import { User } from "../../types/types";
import { Values } from "../../components/ProfileInfo/ProfileInfo";
import { PasswordValues } from "../../components/ChangePassword/ChangePassword";
import { ForgotPassword } from "../../components/ForgotPassword/ForgotPassword";


const dev = false;

const BASE_URL =  dev? 'https://phonebook-app-backend-xskd.onrender.com/api': 'http://localhost:3000/api'


export const signUp = createAsyncThunk(
    'auth/signUp', async(credentials: Partial<User>, thunkAPI)=> {
        try {
        const {data} = await axios.post(`${BASE_URL}/auth/register`, credentials)
            setAuthHeader(data.token)
        return data;
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.massage)
    }
    }
)
export const login = createAsyncThunk(
    'auth/login', async (credentials: Partial<User>, thunkAPI) => {
        try {
            const {data} = await axios.post(`${BASE_URL}/auth/login`, credentials)
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
            await axios.post(`${BASE_URL}/auth/logout`);
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
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      // If there is a token, add it to the HTTP header and perform the request
      setAuthHeader(persistedToken);
        const res = await axios.get(`${BASE_URL}/user/current`);
       
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateAvatar = createAsyncThunk(
  'auth/avatar', async (file:any, thunkAPI) => {
    const formData = new FormData();
    formData.append('Content-Type', file.type);
    formData.append('avatar', file);
      try {
          const {data} = await axios.patch(`${BASE_URL}/user/avatar`, formData)
          return data;
      } catch (error: any) {
          return thunkAPI.rejectWithValue(error.massage)
      }
  }
);

export const updateUserInfo = createAsyncThunk(
  'auth/update-current', async (creditinals: Values, thunkAPI)   => {
      try {
          const {data} = await axios.patch(`${BASE_URL}/user/update-current`, creditinals);
          return data;
      } catch (error: any) {
          return thunkAPI.rejectWithValue(error.massage)
      }
  }
);


export const updatePassword = createAsyncThunk(
  'auth/update-password', async (creditinals: PasswordValues, thunkAPI) => {
    try {
        const {data} = await axios.patch(`${BASE_URL}/user/update-password`, creditinals);
        return data;
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.massage)
    }
}
)

export const forgotPassword = createAsyncThunk(
  'auth/forgot-password', async (creditinals: ForgotPassword, thunkAPI) => {
    try {
      await axios.post(`${BASE_URL}/auth/forgot-password`, creditinals);

    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.massage)
    }
}
)