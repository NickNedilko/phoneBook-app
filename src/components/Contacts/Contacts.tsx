import {FC} from "react"
import { Email, Github, LinkedIn, List, Mobile, Telegram } from "./Contacts.styled"


export const Contacts: FC = () => {
    return (
           <List>
      <li>
        <a href="https://github.com/NickNedilko" 
        aria-label="link to Github" 
        rel="noopener noreferrer nofollow" 
        target='_blank'>
        <Github/>
        </a>
      </li>
      <li>
        <a href="https://linkedin.com/in/nikolay-nedilko" 
        aria-label="link to LinkedIn" 
        rel="noopener noreferrer nofollow" 
        target='_blank'>
                    <LinkedIn/>
          </a>
      </li>
      <li>
        <a href="https://t.me/NickyNed" 
        aria-label="link to Telegram" 
        rel="noopener noreferrer nofollow" 
        target='_blank'>
                    <Telegram/>        
          </a>
        </li>
      <li>
        <a href="tel:+380982074227" 
        aria-label="link to Telephone">
                    <Mobile/>    
        </a>
      </li>
      <li>
        <a href="mailto:mykola.ned34@gmail.com" 
        aria-label="link to Email">
<Email/>      
        </a>
      </li>
    </List>
    )
}