import React, { useState } from 'react'
import "./InfoPart.scss"
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import ProfileModal from '../ProfileModal/ProfileModal';

const InfoPart = () => {
    const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className='InfoPart'>
        <div className="BasInfo">
            <h4>Your info</h4>
            <DriveFileRenameOutlineIcon onClick={() => setModalOpened(true)}/>
            <ProfileModal  modalOpened={modalOpened}
            setModalOpened={setModalOpened}/>
        </div>
        <div className="info">
            <span>
                <b>Status</b>
            </span>
            <span>in Relationship</span>
        </div>
        <div className="info">
            <span>
                <b>Lives in</b>
            </span>
            <span>Multan</span>
        </div>
        <div className="info">
            <span>
                <b>Works at</b>
            </span>
            <span>Multan</span>
        </div>
        <button className='button logout-button'>Log Out</button>
    </div>
  )
}

export default InfoPart