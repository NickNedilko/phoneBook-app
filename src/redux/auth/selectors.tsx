import { UserInfo } from "../../types/types";

export const selectIsLoggedIn  = (state:any):string => state.auth.isLoggedIn;

export const selectUser = (state: any):UserInfo => state.auth.user;

export const selectIsRefreshing = (state: any):boolean => state.auth.isRefreshing;

