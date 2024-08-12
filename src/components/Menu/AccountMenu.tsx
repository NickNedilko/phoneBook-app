import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/authThunk';
import { useNavigate } from 'react-router-dom';

const  AccountMenu = ()=> {
  const dispatch = useDispatch<any>();
const navigate = useNavigate();
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)}>
            Dashboard
          </Button>
          <Menu {...bindMenu(popupState)}>
          <MenuItem onClick={()=>{navigate('/profile')
            popupState.close()
          }}>Profile</MenuItem>
            <MenuItem onClick={()=>{navigate('/change-password')
            popupState.close()
          }}>Change Password</MenuItem>
            <MenuItem onClick={()=>{
              dispatch(logout())
              popupState.close()}
              }>Logout</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}

export default AccountMenu;