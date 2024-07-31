

import { User } from "../../types/types";
import { RootState } from "../store";


export const selectIsLoggedIn  = (state: RootState):boolean => state.auth.isLoggedIn;

export const selectUser = (state: RootState):Partial<User> => state.auth.user;

export const selectIsRefreshing = (state:RootState):boolean => state.auth.isRefreshing;

