import React from 'react'
import { connect } from 'react-redux'
import { addMessage } from '../actions'

let AddMessage = ({ dispatch }) => {
  let input
  let style = {
    color: sessionStorage.getItem('color')
  }

  let buttonStyle = {
    backgroundColor: sessionStorage.getItem('color')
  }

  return (
    <div className="AddMessage">
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addMessage(input.value))
        input.value = ''
      }}>
        <input type="text" placeholder="Bonjour !" style={style} ref={node => {
          input = node
        }} />
        <button type="submit" style={buttonStyle}>
          Envoyer
        </button>
      </form>
    </div>
  )
}
AddMessage = connect()(AddMessage)

export default AddMessage
