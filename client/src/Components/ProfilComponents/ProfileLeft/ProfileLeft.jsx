import React from 'react'
import MainLogo from '../../HomeComponents/ProfilePart/MainLogo/MainLogo'
import MiniFollowers from '../../HomeComponents/ProfilePart/MiniFollowers/MiniFollowers'
import InfoPart from '../InfoPart/InfoPart'
import "./ProfileLeft.scss"

const ProfileLeft = () => {
  return (
    <div className='ProfileLeft'>
     <MainLogo/>
      <InfoPart/>
      <MiniFollowers/>
    </div>
  )
}

export default ProfileLeft