import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{ topic }</p>
        </div>
    );

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img 
                    src="http://en.iaplc.com/about/images/gpworks20.jpg" 
                    alt="" 
                />
                <Avatar className="sidebar__avatar" />
                <h2>Jacky Lau</h2>
                <h4>jackylau.email@gmail.com</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">3,000</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">3,000</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('softwaredev')}
                {recentItem('engineering')}
                {recentItem('design')}
            </div>
        </div>
    )
}

export default Sidebar
