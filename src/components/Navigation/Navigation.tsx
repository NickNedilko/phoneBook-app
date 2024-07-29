import  {FC} from "react"
import { List, StyledLink } from "./Navigation.styled"
import { useAuth } from "../../hooks/useAuth"
// import { List, StyledLink } from "./AppBar.styled"



export const Navigation: FC = () => {

  const { isLoggedIn } = useAuth();
    return (
     
        isLoggedIn && <List>
          <li><StyledLink to="/" 
          aria-label='home'
            >Home</StyledLink></li>
          <li><StyledLink to="contacts" 
          aria-label='contacts'
          >Contacts</StyledLink></li>
        </List>
     
    )
}