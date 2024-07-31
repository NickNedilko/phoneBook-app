import { selectIsLoggedIn, selectIsRefreshing, selectUser } from '../redux/auth/selectors';
import { useAppSelector } from '../redux/store';
import { UserInfo } from '../types/types';



export const useAuth = () => {
  const isLoggedIn: boolean = useAppSelector(selectIsLoggedIn);
  const isRefreshing: boolean = useAppSelector(selectIsRefreshing);
  const user: UserInfo = useAppSelector(selectUser);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};