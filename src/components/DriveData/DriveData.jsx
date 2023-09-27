import React from 'react';
import "./DriveData.css";
import { ArrowDownward, ArrowDropDown, InfoOutlined, InsertDriveFile, List } from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';

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

        <div className='driveData_body'>
            <div className='driveData_suggested_options'>
                <div className='driveData_suggested_option' style={{cursor:"pointer"}}>
                    <InsertDriveFile />
                    <span>File Name</span>
                </div>
            </div>


            <div className='driveData_lists'>
                <table>
                    <tr>
                        <th width="50%"><span>Name <IconButton style={{marginLeft:"2px"}}><ArrowDownward /></IconButton></span></th>
                        <th><span>Owner</span></th>
                        <th><span>Last modified</span></th>
                        <th><span>File size</span></th>
                    </tr>

                    <tr className='list_hover'>
                        <td style={{paddingLeft:"15px"}}><span><InsertDriveFile style={{marginRight:"10px"}} /> file name</span></td>
                        <td><span><Avatar style={{marginRight:"10px"}} /> me</span></td>
                        <td><span>16 Jul 2023</span></td>
                        <td><span>342.32 KB</span></td>
                    </tr>
   
                </table>
            </div>
        </div>
    </div>
  )
}

export default DriveData;