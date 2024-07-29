import { FC } from "react";
import { UserName, Wrapper } from "./UserMenu.styled";
import { Avatar } from "@mui/material";
import { useDispatch} from "react-redux";
import { logout } from "../../redux/auth/authThunk";
import { useAuth } from "../../hooks/useAuth";



export const UserMenu: FC = () => {
  const dispatch = useDispatch<any>();
  const {user} = useAuth();

  return (
    <Wrapper>
      <UserName>Welcome, {user.name} </UserName>
      <Avatar alt={user.name} src={user.avatarUrl}
      sx={{ width: 56, height: 56 }}
      />
      <button type="button" onClick={()=>dispatch(logout())}>
        Logout
      </button>
    </Wrapper>
  );
};