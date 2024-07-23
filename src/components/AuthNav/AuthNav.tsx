import  {FC} from "react"
import { List, Nav, StyledLink } from "./AuthNav.styled"



export const AuthNav: FC = () => {
    return (
      <Nav>
        <List>
          <li><StyledLink to="/register" 
          aria-label='register'
            >register</StyledLink></li>
          <li><StyledLink to="login" 
          aria-label='login'
          >Log in</StyledLink></li>
        </List>
      </Nav>
    )
}