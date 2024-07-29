import { createSlice } from "@reduxjs/toolkit"
import { getCurrentUser, login, logout, signUp } from "./authThunk"

interface User {
    name: string,
    id: string,
    email: string,
    avatarUrl: string
}

interface State {
    token: string,
    user: User,
    isLoading: boolean,
    error: null | string,
    isLoggedIn: boolean,
    isRefreshing: boolean
}

const initialState: State = {
    token: '',
    user: {name: '', id: '', email: '', avatarUrl: ''},
    isLoading: false,
    error: null,
    isLoggedIn: false,
    isRefreshing: false
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
  
        builder.addCase(signUp.pending, (state) => {
            state.isLoading = true;
        }).addCase(signUp.fulfilled, (state, {payload}) => {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
            state.isLoading = false;
        }).addCase(signUp.rejected, (state) => {
            state.isLoading = true;
        }).addCase(login.pending, (state) => {
            state.isLoading = true;
        }).addCase(login.fulfilled, (state, {payload}) => {
            state.user = payload.user;
            state.isLoggedIn = true;
            state.token = payload.token
            state.isLoading = false;
        }).addCase(login.rejected, (state) => {
            state.isLoading = true;
        }).addCase(logout.pending, (state) => {
            state.isLoading = true;
        }).addCase(logout.fulfilled, (state) => {
            state.token = '';
            state.user = {
                name: '',
                email: '',
                avatarUrl: '',
                id: ''
            }
            state.isLoggedIn = false; 
            state.isLoading = false;
        }).addCase(logout.rejected, (state) => {
            state.isLoading = true;
        }).addCase(getCurrentUser.pending, (state) => {
            state.isLoading = true;
            state.isRefreshing = true;
        }).addCase(getCurrentUser.fulfilled, (state, {payload}) => {
            state.user = payload;
            state.isLoggedIn = true;
            state.isLoading = false;
            state.isRefreshing = false;
        }).addCase(getCurrentUser.rejected, (state) => {
            state.isLoading = false;
            state.isRefreshing = false;
        })

    }
}
)

export const authReducer  = authSlice.reducer;