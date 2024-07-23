import  {FC} from "react"
import { Logo, StyledLink } from "./Logo.styled"
import logo  from '../../../public/phonebook.svg'


export const SiteLogo: FC = () => {
    return (
        <StyledLink to="/" 
          aria-label='home'>
                <Logo src={logo} alt="logo" />
            </StyledLink> 
    )
}