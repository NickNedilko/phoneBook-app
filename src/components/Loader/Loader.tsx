import {FC} from "react"
import { Bars } from "react-loader-spinner"
import { Wrapper } from "./Loader.styled"


export const Loader:FC = () => {
    return (
        <Wrapper>
   <Bars
  height="40"
  width="40"
  color="#8e88e3"
/>
        </Wrapper>)
} 