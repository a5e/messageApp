import React from 'react'
import PropTypes from 'prop-types'

const Message = (message) => {
  let isMe = message.tabId === sessionStorage.getItem('tab-id') ? ' (moi)' : '';

  let style = {color: message.color}
  return (
    <div className="Message" >
      <span style={style}>{message.author}{isMe}</span> : <span>{message.text}</span>
    </div>
  )
}

Message.propTypes = {
  text: PropTypes.string.isRequired,
  tabId: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
}

export default Message
