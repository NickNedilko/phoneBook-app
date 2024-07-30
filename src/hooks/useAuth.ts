import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectIsRefreshing, selectUser } from '../redux/auth/selectors';
import { User } from '../redux/auth/auth.slice';



export const useAuth = () => {
  const isLoggedIn: string = useSelector(selectIsLoggedIn);
  const isRefreshing: boolean = useSelector(selectIsRefreshing);
  const user: User = useSelector(selectUser);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};