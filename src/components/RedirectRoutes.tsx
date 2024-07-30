import { Navigate } from "react-router-dom";
import { selectIsLoggedIn, selectIsRefreshing } from "../redux/auth/selectors";
import { useSelector } from "react-redux";
import { FC } from "react";

interface RouteProps{
  element:  JSX.Element,
  redirectTo?: string
}

export const RestrictedRoute: FC<RouteProps> = ({ element , redirectTo = '/contacts' }) => {
  const isLogged = useSelector(selectIsLoggedIn);

  return isLogged ? <Navigate to={redirectTo} /> : element;
}

export const PrivateRoute: FC<RouteProps> = ({ element, redirectTo = '/' }) =>{
  const isLogged = useSelector(selectIsLoggedIn);
  const isFetching = useSelector(selectIsRefreshing);

  return !isLogged && !isFetching ? <Navigate to={redirectTo} /> : element;
}

// import type { FC } from "react";
// import { Outlet, Navigate } from "react-router-dom";


// type TProps = {
//   isAuthenticated?: boolean;
//   redirectPath?: string;
// };

// export const PrivateRoutes: FC<TProps> = ({ isAuthenticated, redirectPath = '/' }) => {
//   return isAuthenticated ? <Outlet /> : <Navigate to={redirectPath} />;
// };

// export const RestrictedRoute: FC<TProps> = ({ isAuthenticated, redirectPath = '/' }) => {
//   return isAuthenticated ? <Navigate to={redirectPath}/> : <Outlet/> ;
// };