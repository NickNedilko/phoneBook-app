import { FC } from "react";
import { UserName, Wrapper } from "./UserMenu.styled";
import { Avatar } from "@mui/material";
import { useAuth } from "../../hooks/useAuth";
import AccountMenu from "../Menu/AccountMenu";



export const UserMenu: FC = () => {
  
  const {user} = useAuth();

  return (
    <Wrapper>
      <UserName>Welcome, {user.name} </UserName>
      <Avatar alt={user.name} src={`${user.avatarUrl}`}
      sx={{ width: 56, height: 56 }}
      />

      <AccountMenu/>
      
    </Wrapper>
  );
};