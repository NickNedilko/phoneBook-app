
import { Contacts } from '../Contacts/Contacts';
import { StyledFooter, StyledLink, Text } from './Footer.styled';


const Footer = () => {

  const date:number = new Date().getFullYear();

  return (
    <StyledFooter id='contact'>
      <Contacts/>
    <Text>© {date}. All rights are reserved. Developed by <StyledLink href="https://github.com/NickNedilko" aria-label="link to Github" rel="noopener noreferrer nofollow" target='_blank'>Mykola Nedilko</StyledLink></Text>
    </StyledFooter>
  )
}

export default Footer;
