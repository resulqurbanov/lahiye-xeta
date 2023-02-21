import React from 'react'
import { PostsData } from '../../../../FakeData/PostsData';
import Post from '../Post/Post';
import "./SenderPosts.scss"


const SenderPosts = () => {
  return (
    <div className="SendPart">
    {PostsData.map((post, id) => {
        return <Post data={post} id={id} />
    })}
</div>
  )
}

export default SenderPosts