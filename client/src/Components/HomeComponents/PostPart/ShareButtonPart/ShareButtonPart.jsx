import React, { useRef, useState } from 'react'
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
import TodayOutlinedIcon from '@mui/icons-material/TodayOutlined';
import DoNotDisturbOnOutlinedIcon from '@mui/icons-material/DoNotDisturbOnOutlined';
import "./ShareButtonPart.scss"
const ShareButtonPart = () => {

    
    const [photo, setPhoto] = useState(null);
    const photoRef = useRef();

    const onPhotoChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setPhoto({
                photo: URL.createObjectURL(img),
            });
        }
    };


  return (
    <div className="SharePart">
    <img src="https://hips.hearstapps.com/hmg-prod/images/close-up-of-cat-wearing-sunglasses-while-sitting-royalty-free-image-1571755145.jpg?crop=0.675xw:1.00xh;0.147xw,0&resize=1200:*" alt="" />
    <div>
        <input type="text" placeholder='whats happening' />
        <div className="sendWay">
            <div className="send" style={{ color: "rgb(101, 215, 40)" }}>
                <CollectionsOutlinedIcon onClick={() => photoRef.current.click()} />
                Photo
            </div>
            <div className="send" style={{ color: "rgb(149, 0, 179)" }}
            >
                <PlayCircleOutlineIcon />
                Video
            </div>{""}
            <div className="send" style={{ color: "rgb(245, 6, 6)" }}>
                <AddLocationAltOutlinedIcon />
                Location
            </div>{""}
            <div className="send" style={{ color: "rgb(255, 152, 17)" }}>
                <TodayOutlinedIcon />
                Shedule
            </div>
            <button className='button centerbtn'>Share</button>
            <div style={{ display: "none" }}>
                <input type="file" name='myPhoto' ref={photoRef} onChange={onPhotoChange} />
            </div>
        </div>
        {photo && (

            <div className="insPhoto">
                <DoNotDisturbOnOutlinedIcon onClick={() => setPhoto(null)} />
                <img src={photo.photo} alt="" />
            </div>

        )}
    </div>
</div>
  )
}

export default ShareButtonPart