import { selectIsLoggedIn, selectIsRefreshing, selectUser } from '../redux/auth/selectors';
import { useAppSelector } from '../redux/store';
import { User } from '../types/types';




export const useAuth = () => {
  const isLoggedIn: boolean = useAppSelector(selectIsLoggedIn);
  const isRefreshing: boolean = useAppSelector(selectIsRefreshing);
  const user: Partial<User> = useAppSelector(selectUser);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};