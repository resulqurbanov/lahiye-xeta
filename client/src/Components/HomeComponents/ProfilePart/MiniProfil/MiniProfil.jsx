import React from 'react'
import "./MiniProfil.scss"

const MiniProfil = () => {
  const ProfilePage = true;
  return (
    <div className='MiniProfil'>
      <div className="ProfilImages">
        <img src="https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403" alt="" />
        <img src="https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403" alt="" />

      </div>
      <div className="ProfilName">
        <span>asdasdas</span>
        <span>sdaadasffs</span>
      </div>

      <div className="followers">
        <hr />
        <div>
          <div className="follow">
            <span>885</span>
            <span>Followings</span>
          </div>
          <div className="xett"></div>
          <div className="follow">
            <span>5</span>
            <span>Followers</span>
          </div>

          {ProfilePage && (
            <>
             <div className="xett"></div>
              <div className="follow">
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
        {ProfilePage ? "" : <span className='myprof'>My Profile</span>}
    </div>
  )
}

export default MiniProfil