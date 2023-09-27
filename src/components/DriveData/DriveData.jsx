import React, { useEffect, useState } from 'react';
import "./DriveData.css";
import { ArrowDownward, ArrowDropDown, InfoOutlined, InsertDriveFile, List } from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';
import {
    collection,
    db,
    query,
    orderBy,
    limit,
    onSnapshot
} from "../../firebase";

const DriveData = () => {

    const [files,setFiles] = useState([]);
    const [fileName,setFileName] = useState("");

    useEffect(()=>{
        const queryData = query(collection(db, "MyDrive"),orderBy("timestamp","desc"));
        onSnapshot(queryData,(snapshot)=>{
            const snap = snapshot.docs.map((doc)=>({
                id : doc.id,
                data : doc.data()
            }));
            setFiles(snap);
        });

        const queryName = query(collection(db, "MyDrive"),orderBy("timestamp","desc"),limit(4));
        onSnapshot(queryName,(snapshot)=>{
            const snap = snapshot.docs.map((doc)=>({
                id : doc.id,
                filename : doc.data().filename
            }));
            setFileName(snap);
        });

    },[]);

    const formatBytes = (bytes,decimals = 2)=>{
        if(bytes === 0) return "0 Bytes";

        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

        const i = Math.floor(Math.log(bytes) / Math.log(k));

        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }

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
                {
                    fileName && fileName.map(({id,filename})=>{
                        return <div key={id} className='driveData_suggested_option' style={{cursor:"pointer",overflow:"hidden"}}>
                        <InsertDriveFile />
                        <span>{filename}</span>
                    </div>
                    })
                }
            </div>


            <div className='driveData_lists'>
                <table>
                    <tr>
                        <th width="50%"><span>Name <IconButton style={{marginLeft:"2px"}}><ArrowDownward /></IconButton></span></th>
                        <th><span>Owner</span></th>
                        <th><span>Last modified</span></th>
                        <th><span>File size</span></th>
                    </tr>

                    {
                        files && files.map(({id, data})=>{
                            return <tr key={id} className='list_hover'>
                            <td style={{paddingLeft:"15px"}}><a href={data.fileURL} target='_blank' rel="noreferrer" download={data.filename}><span><InsertDriveFile style={{marginRight:"10px"}} /> {data.filename}</span></a></td>
                            <td><span><Avatar style={{marginRight:"10px"}} /> me</span></td>
                            <td><span>{new Date(data.timestamp?.seconds*1000).toUTCString()}</span></td>
                            <td><span>{formatBytes(data.size)}</span></td>
                        </tr>
                        })
                    }

                </table>
            </div>
        </div>
    </div>
  )
}

export default DriveData;