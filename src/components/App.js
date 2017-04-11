import React from 'react'
import AddMessage from '../containers/AddMessage'
import List from '../containers/MessageList'

const App = () => (
  <div className="Chat">
    <List />
    <AddMessage />
  </div>
)

export default App
