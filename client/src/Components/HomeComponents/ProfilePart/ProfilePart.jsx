import React from 'react'
import MainLogo from './MainLogo/MainLogo'
import MiniFollowers from './MiniFollowers/MiniFollowers'
import MiniProfil from './MiniProfil/MiniProfil'
import "./ProfilePart.scss"


const ProfilePart = () => {
  return (
    <div className='ProfilePart'>
      <MainLogo/>
      <MiniProfil />
      <MiniFollowers/>
    </div>
  )
}

export default ProfilePart