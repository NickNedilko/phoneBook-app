import { Navigate } from "react-router-dom";
import { selectIsLoggedIn, selectIsRefreshing } from "../redux/auth/selectors";
import { useSelector } from "react-redux";

export const RestrictedRoute = ({ component, navigateTo = '/contacts' }) => {
  const isLogged = useSelector(selectIsLoggedIn);

  return isLogged ? <Navigate to={navigateTo} /> : component;
}

export const PrivateRoute = ({ component, navigateTo = '/' }) =>{
  const isLogged = useSelector(selectIsLoggedIn);
  const isFetching = useSelector(selectIsRefreshing);

  return !isLogged && !isFetching ? <Navigate to={navigateTo} /> : component;
}