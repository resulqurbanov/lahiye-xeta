import React from 'react'
import "./RightPart.scss"
import OtherHousesRoundedIcon from '@mui/icons-material/OtherHousesRounded';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import TrendsTag from './TrendesTag/TrendsTag';
import { useState } from 'react';
import ShareModal from '../../ProfilComponents/ShareModal/ShareModal';

const RightPart = () => {


    const [modalOpened, setModalOpened] = useState(false);

    return (
        <div className='RightPart'>
            <div className="miniNav">
                <OtherHousesRoundedIcon />
                <SettingsOutlinedIcon />
                <FacebookIcon />
                <TextsmsOutlinedIcon />
            </div>
            <TrendsTag />
            <button className="button r-button" onClick={() => setModalOpened(true)}>
                Share
            </button>
            <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
        </div>
    )
}

export default RightPart