

// import { User } from "../../types/types";
import { RootState } from "../store";

interface User{
     id: string,
    name: string,
    email: string,
    avatarUrl: string,
}

export const selectIsLoggedIn  = (state: RootState):boolean => state.auth.isLoggedIn;

export const selectUser = (state: RootState):User => state.auth.user;

export const selectIsRefreshing = (state:RootState):boolean => state.auth.isRefreshing;

