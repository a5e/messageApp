import React from 'react'
import { render } from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'

import color from './color'
import name from './name'

import { localStorageMiddleware, createStorageListener} from './middlewares/localStorage';

if (!sessionStorage.getItem('name')) {
  sessionStorage.setItem('name', name)
}
if (!sessionStorage.getItem('color')) {
  sessionStorage.setItem('color', color)
}


const initialMessages = () => {
  if (!localStorage.getItem('messages')) {
    localStorage.setItem('messages', JSON.stringify([]))
    return []
  }
  return JSON.parse(localStorage.getItem('messages'))
}

const store = createStore(reducer, {
  messages : initialMessages()
},
  applyMiddleware(
    localStorageMiddleware()
  )
)

window.addEventListener('storage', createStorageListener(store));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
