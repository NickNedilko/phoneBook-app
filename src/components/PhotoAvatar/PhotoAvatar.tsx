import { Avatar, Button } from "@mui/material"
import { VisuallyHiddenInput } from "../ContactItem/ContactItem.styled"
import { FC, FormEvent } from "react";


interface PhotoAvatarProps {
  name?: string,
  avatar?: string,
  onChange: (e: FormEvent<HTMLInputElement> ) => void;
}

export const PhotoAvatar: FC<PhotoAvatarProps> = ({name, avatar, onChange}) =>{


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