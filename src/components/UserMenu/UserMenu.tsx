import { FC } from "react";
import { UserName, Wrapper } from "./UserMenu.styled";
import { Avatar } from "@mui/material";
import { useDispatch} from "react-redux";
import { logout } from "../../redux/auth/authThunk";



export const UserMenu: FC = () => {
  const dispatch = useDispatch();
 
  return (
    <Wrapper>
      <UserName>Welcome, </UserName>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"
      sx={{ width: 56, height: 56 }}
      />
      <button type="button" onClick={()=>dispatch(logout())}>
        Logout
      </button>
    </Wrapper>
  );
};