import  {FC} from "react"
import { List, StyledLink } from "./Navigation.styled"
// import { List, StyledLink } from "./AppBar.styled"



export const Navigation: FC = () => {
    return (
     
       
        <List>
          <li><StyledLink to="/" 
          aria-label='home'
            >Home</StyledLink></li>
          <li><StyledLink to="contacts" 
          aria-label='contacts'
          >Contacts</StyledLink></li>
          <li><StyledLink to="favorite" 
          aria-label='favorite'
          >Favorite contacts</StyledLink></li>
        </List>
     
    )
}