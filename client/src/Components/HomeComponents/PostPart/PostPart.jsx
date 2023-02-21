import React from 'react'
import "./PostPart.scss"
import ShareButtonPart from './ShareButtonPart/ShareButtonPart';
import SenderPosts from './SenderPosts/SenderPosts';

const PostPart = () => {

    return (
        <div className='PostPart'>
            <ShareButtonPart/>
            <SenderPosts/>
        </div>
    )
}

export default PostPart