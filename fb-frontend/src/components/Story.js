import React from 'react'
import {Avatar} from '@material-ui/core'

export const Story = ({image, profileSrc, title}) => {
  return (
    <div style={{backgroundImage: `url(${image ? image : 'https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-1.2.1&w=1000&q=80'})`}} className="story">
      <Avatar src={profileSrc} className="story__avatar" />
      <h4>{title}</h4>
    </div>
  )
}
