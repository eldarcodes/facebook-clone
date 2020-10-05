import React, {useState} from 'react'
import {Avatar, Button} from '@material-ui/core'
import AttachFileIcon from '@material-ui/icons/AttachFile'
import VideocamIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'

export const MessageSender = () => {
  const [input, setInput] = useState('')
  const [image, setImage] = useState(null)

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }
  const handleSubmit = () => {}

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar />
        <form>
          <input
            onChange={(e) => setInput(e.target.value)}
            className="messageSender__input"
            value={input}
            type="text"
          />
          <Button variant="contained" component="label">
            <AttachFileIcon />
            <input
              onChange={handleChange}
              className="messageSender__fileSelector"
              type="file"
              style={{display: 'none'}}
            />
          </Button>
          <button type="submit" onClick={handleSubmit}>
            Hidden Submit
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{color: 'red'}} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{color: 'green'}} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{color: 'orange'}} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  )
}
