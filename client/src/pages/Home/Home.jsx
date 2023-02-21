import React from 'react'
import PostPart from '../../Components/HomeComponents/PostPart/PostPart'
import ProfilePart from '../../Components/HomeComponents/ProfilePart/ProfilePart'
import RightPart from '../../Components/HomeComponents/RightPart/RightPart'
import "./Home.scss"

const Home = () => {
  return (
    <div className='main'>
    <div className="blur" style={{ top: '18%', right: '0' }}></div>
      <div className="blur" style={{ top: '36%', left: '-8rem' }}></div>
      <div className="blur" style={{ top: '2%', right: '30rem' }}></div>
      <div className="blur" style={{ top: '80%', right: '15rem' }}></div>
      <div className="blur" style={{ top: '80%', left: '0rem',color: '#e4f925' }}></div>
    <div className='Home'>
      <ProfilePart />
      <PostPart />
      <RightPart/>
    </div>
    </div>
  )
}

export default Home