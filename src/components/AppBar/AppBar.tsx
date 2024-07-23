import  {FC} from "react"
import {Nav} from "./AppBar.styled"

import { Navigation } from "../Navigation/Navigation"
import { AuthNav } from "../AuthNav/AuthNav"
import { SiteLogo } from "../Logo/Logo"
import { UserMenu } from "../UserMenu/UserMenu"



export const AppBar: FC = () => {
    return (
      <Nav>
        <SiteLogo />
        <Navigation />
        <AuthNav />
        <UserMenu/>
      </Nav>
    )
}