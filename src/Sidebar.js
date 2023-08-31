import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Person4Icon from '@mui/icons-material/Person4';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';

function Sidebar() {
  return (
    <div className='sidebar'>
        {/* Twitter icon */}
        <TwitterIcon className='sidebar__twitterIcon' />
        
        <SidebarOption active Icon={HomeIcon} text="Home"/>
        <SidebarOption Icon={TagIcon} text="Explore"/>
        <SidebarOption Icon={NotificationsIcon} text="Notifications"/>
        <SidebarOption Icon={MailOutlineIcon} text="Messages"/>
        <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks"/>
        <SidebarOption Icon={ListAltIcon} text="Lists"/>
        <SidebarOption Icon={Person4Icon} text="Profile"/>
        <SidebarOption Icon={MoreHorizIcon} text="More"/>
        
        

        {/* Button  -> Tweet */}
        <Button variant='outlined' className='sidebar__tweet' fullWidth>Tweet</Button>

    </div>
  )
}

export default Sidebar