import { combineReducers } from 'redux'
import messages from './messages'

const messageApp = combineReducers({
  messages
})

export default messageApp
