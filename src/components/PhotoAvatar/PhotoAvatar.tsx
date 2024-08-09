import { Avatar, Button } from "@mui/material"
import { VisuallyHiddenInput } from "../ContactItem/ContactItem.styled"

export const PhotoAvatar = ({name, avatar, onChange}) =>{

    return(
        <Button
  component="label"
  role={undefined}
  tabIndex={-1}
>
  <Avatar
  alt={name}
  src={`${avatar}`}
  sx={{ width: 120, height: 120 , margin:'0 auto'}}
/>
  <VisuallyHiddenInput type="file" onChange={onChange} />
</Button>
    )
}