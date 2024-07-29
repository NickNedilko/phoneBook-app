import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectIsRefreshing, selectUser } from '../redux/auth/selectors';

interface User {
  name: string,
  email: string,
  avatarUrl: string
}

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