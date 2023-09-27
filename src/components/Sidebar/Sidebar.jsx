import React from 'react';
import "./Sidebar.css";
import { Add, CloudQueue, DeleteOutlineOutlined, Devices, MobileScreenShare, PeopleAltOutlined, QueryBuilderOutlined, StarBorderOutlined } from '@mui/icons-material';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <button className="sidebar_btn">
            <Add />
            <span>New</span>
        </button>

            <div className="sidebar_options">
                <div className="sidebar_option sidebar_option_active">
                    <MobileScreenShare />
                    <span>My Drive</span>
                </div>
                <div className="sidebar_option">
                    <Devices />
                    <span>Computers</span>
                </div>
                <div className="sidebar_option">
                    <PeopleAltOutlined />
                    <span>Shared with me</span>
                </div>
                <div className="sidebar_option">
                    <QueryBuilderOutlined />
                    <span>Recent</span>
                </div>
                <div className="sidebar_option">
                    <StarBorderOutlined />
                    <span>Starred</span>
                </div>
                <div className="sidebar_option">
                    <DeleteOutlineOutlined />
                    <span>Trash</span>
                </div>
                <div className="sidebar_option">
                    <CloudQueue />
                    <span>Storage</span>
                </div>
            </div>

            <div className="sidebar_progress">
                <progress value="60" max="100" />
                <span>1.03 GB of 15 GB used</span>
            </div>
        
    </div>
  )
}

export default Sidebar;