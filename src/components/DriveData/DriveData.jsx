import React from 'react';
import "./DriveData.css";
import { ArrowDropDown, InfoOutlined, List } from '@mui/icons-material';
import { IconButton } from '@mui/material';

const DriveData = () => {
  return (
    <div className='driveData'>
        <div className="driveData_header">
            <div className='driveData_header_left'>
                <span>My Drive</span>
                <ArrowDropDown />
            </div>
            <div className='driveData_header_right'>
                <IconButton>
                    <List />
                </IconButton>
                <IconButton>
                    <InfoOutlined />
                </IconButton>
            </div>
        </div>

        <div className='driveData_middle_options'>
            <div className='driveData_middle_option'>
                <span>Type</span>
                <ArrowDropDown />
            </div>
            <div style={{marginLeft:"7px"}} className='driveData_middle_option'>
                <span>People</span>
                <ArrowDropDown />
            </div>
            <div style={{marginLeft:"7px"}} className='driveData_middle_option'>
                <span>Modified</span>
                <ArrowDropDown />
            </div>
        </div>
    </div>
  )
}

export default DriveData;