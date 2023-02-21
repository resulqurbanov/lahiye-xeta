import React from 'react'
import "./MiniFollowers.scss"

import { Followers } from '../../../../FakeData/follovers'
const MiniFollowers = () => {
    return (
        <div className='MiniFollowers'>
            <h3>Who is Following you</h3>

            {Followers.map((follower, id) => {
                return (
                    <div className="follower">
                        <div>
                            <img src={follower.img} alt="" className='followerImg' />
                            <div className="name">
                                <span>{follower.name}</span>
                                <span>@{follower.username}</span>

                            </div>
                        </div>
                        <button className='button f-button'>follow</button>
                    </div>
                )
            })}
        </div>
    )
}

export default MiniFollowers