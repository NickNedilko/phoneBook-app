import  {FC} from "react"
import {Nav} from "./AppBar.styled"

import { Navigation } from "../Navigation/Navigation"
import { AuthNav } from "../AuthNav/AuthNav"
import { SiteLogo } from "../Logo/Logo"
import { UserMenu } from "../UserMenu/UserMenu"
import { useAuth } from "../../hooks/useAuth"



export const AppBar: FC = () => {
  const { isLoggedIn } = useAuth();
    return (
      <Nav>
        <SiteLogo />
        <Navigation />
        {isLoggedIn ? <UserMenu/> : <AuthNav /> }
      </Nav>
    )
}