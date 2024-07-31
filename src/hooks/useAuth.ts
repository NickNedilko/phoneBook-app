import { selectIsLoggedIn, selectIsRefreshing, selectUser } from '../redux/auth/selectors';
import { User } from '../redux/auth/auth.slice';
import { useAppSelector } from '../redux/store';



export const useAuth = () => {
  const isLoggedIn: string = useAppSelector(selectIsLoggedIn);
  const isRefreshing: boolean = useAppSelector(selectIsRefreshing);
  const user: User = useAppSelector(selectUser);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};