import { configureStore, Store } from '@reduxjs/toolkit'
import { authReducer } from './auth/auth.slice'


export const store: Store = configureStore({
  reducer: {
   auth : authReducer,
  },
})

