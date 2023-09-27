import React from 'react';
import "./Header.css";
import { Avatar, IconButton } from '@mui/material';
import { Apps, FormatAlignCenter, HelpOutline, Search, SettingsOutlined } from '@mui/icons-material';
import {
    useUserContext
} from "../../context/UserContext";
import {auth,signOut} from "../../firebase";

const Header = () => {

    const {user} = useUserContext();

  return (
    <div className='header'>
        <div className="header_left">
            <img src='https://mailmeteor.com/logos/assets/PNG/Google_Drive_Logo_512px.png' alt='logo_img' />
            <span className='logo_name'>Drive</span>
        </div>

        <div className="header_middle">
            <div className='header_search'>
                <IconButton>
                    <Search />
                </IconButton>
                <input type="text" placeholder='Search in Drive' />
                <IconButton>
                    <FormatAlignCenter />
                </IconButton>
            </div>
        </div>

        <div className="header_right">
            <div className="header_options">
                <IconButton>
                    <HelpOutline />
                </IconButton>
                <IconButton>
                    <SettingsOutlined />
                </IconButton>
                <IconButton>
                    <Apps />
                </IconButton>
                <IconButton onClick={()=>signOut(auth)}>
                    <Avatar src={user.photoURL} />
                </IconButton>
            </div>
        </div>
    </div>
  )
}

export default Header;