import React from 'react';
import './Header.css';
import HeaderOption from './HeaderOption.js';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';


function Header() {
    return (
        <div className='header'>
            <div className="header__left">
                <img 
                 src="https://image.flaticon.com/icons/png/512/174/174857.png"
                 alt="LinkedIn icon"
                />
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" />                </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title='Home'/>
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
                <HeaderOption Icon={ChatIcon} title='Chat'/>
                <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
                <HeaderOption avatar="https://i.pinimg.com/564x/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg" title="profilepic" />
            </div>
        </div>
    )
}

export default Header;