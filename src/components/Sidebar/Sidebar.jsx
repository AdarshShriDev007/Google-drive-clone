import React, { useState } from 'react';
import "./Sidebar.css";
import { Add, Addchart, CloudQueue, DeleteOutlineOutlined, Devices, MobileScreenShare, PeopleAltOutlined, QueryBuilderOutlined, StarBorderOutlined } from '@mui/icons-material';
import {
    db,
    collection,
    addDoc,
    storage,
    ref,
    uploadBytesResumable,
    getDownloadURL
} from "../../firebase";

const Sidebar = () => {

    const [progressVal,setProgressVal] = useState(0);
    const [show,setShow] = useState("none");

    const createFile = ()=>{
        const inputFile = document.createElement("input");
        inputFile.type = "file";
        inputFile.addEventListener('change',(event)=>{
            if(event.target.files[0])
            {  
                handleFile(event.target.files[0]);
            }
        })

        inputFile.click();
    }


    const handleFile = (fileData)=>{
        if(fileData)
        {
            const storageRef = ref(storage, `files/${fileData.name}`);

            const uploadTask = uploadBytesResumable(storageRef, fileData);

            uploadTask.on('state_changed', 
                (snapshot) => {
                    const progressData = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    setShow("block");
                    setProgressVal(Math.floor(progressData));
                
                }, 
                (error) => {
                    console.error(error);
                }, 
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                        try{
                            addDoc(collection(db, "MyDrive"),{
                                timestamp: new Date(),
                                filename : fileData.name,
                                fileURL : url,
                                size : fileData.size
                            });
                            setProgressVal(0);
                            setShow("none");
                            
                        }
                        catch(error){
                            console.error(error);
                        }
                    });
                }
            );

        }
    }

  return (

    <>
       <div className="progress" style={{display: `${show}`}}>
            <div className='progress-bar' style={{width:`${progressVal}%`}}></div>
            <span>{progressVal}%</span>
       </div>

        <div className='sidebar'>
            <button className="sidebar_btn" onClick={createFile}>
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
    </>
  )
}

export default Sidebar;