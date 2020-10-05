import React from 'react'
import {Feed} from './components/Feed'
import {Header} from './components/Header'
import {Sidebar} from './components/Sidebar'
import {Widget} from './components/Widget'

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
        <Widget />
      </div>
    </div>
  )
}

export default App
