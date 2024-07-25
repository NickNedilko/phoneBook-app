import { createAsyncThunk } from "@reduxjs/toolkit"
// import { setAuthHeader } from "../../helpers/jwt";
import axios from "axios";
import { clearAuthHeader, setAuthHeader } from "../../helpers/jwt";

interface UserInfo{
    name: string;
    email: string
    password: string
}

export const signUp = createAsyncThunk(
    'auth/signUp', async(credentials : UserInfo, thunkAPI)=> {
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
        } catch (error) {
            return thunkAPI.rejectWithValue(error.massage)
            
        }
    }
)

export const refreshUser = createAsyncThunk(
    'auth'
)