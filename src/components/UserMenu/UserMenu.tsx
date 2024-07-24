import { FC } from "react";
import { UserName, Wrapper } from "./UserMenu.styled";
import { Avatar } from "@mui/material";



export const UserMenu: FC = () => {
  return (
    <Wrapper>
      <UserName>Welcome, </UserName>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"
      sx={{ width: 56, height: 56 }}
      />
      <button type="button">
        Logout
      </button>
    </Wrapper>
  );
};