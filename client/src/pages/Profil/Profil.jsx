import React from 'react'
import PostPart from '../../Components/HomeComponents/PostPart/PostPart'
import MiniProfil from '../../Components/HomeComponents/ProfilePart/MiniProfil/MiniProfil'
import RightPart from '../../Components/HomeComponents/RightPart/RightPart'
import ProfileLeft from '../../Components/ProfilComponents/ProfileLeft/ProfileLeft'
import "./Profil.scss"

const Profil = () => {
  return (
    <div className='main'>
      <div className="blur" style={{ top: '18%', right: '0' }}></div>
      <div className="blur" style={{ top: '36%', left: '-8rem' }}></div>
      <div className="blur" style={{ top: '2%', right: '30rem' }}></div>
      <div className="blur" style={{ top: '80%', right: '0rem' }}></div>
      <div className="blur" style={{ top: '80%', left: '0rem',color: '#e4f925' }}></div>

      <div className='Profile'>
        <ProfileLeft />
        <div className="Profile-center">
          <MiniProfil />
          <PostPart />
        </div>
        <RightPart/>
        <div>xcvxc</div>
      </div>
    </div>
  )
}

export default Profil