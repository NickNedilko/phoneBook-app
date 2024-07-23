import { FC } from "react";
import { UserName, Wrapper } from "./UserMenu.styled";



export const UserMenu: FC = () => {
  return (
    <Wrapper>
      <UserName>Welcome, </UserName>
      <button type="button">
        Logout
      </button>
    </Wrapper>
  );
};