
import {FC} from 'react';
import { AppBar } from '../AppBar/AppBar';
import { StyledHeader } from './Header.styled';



const Header:FC = () => {

  return (
    <StyledHeader>
      <AppBar />
    </StyledHeader>
  )
}

export default Header