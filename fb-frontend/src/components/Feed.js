import React from 'react'
import {MessageSender} from './MessageSender'
import {StoryReel} from './StoryReel'
import {Post} from './Post'

export const Feed = () => {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic=""
        message="This is the message"
        timestamp="1601824099210"
        imgName="imgName"
        username="Eldar"
      />
    </div>
  )
}
