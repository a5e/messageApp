import React from 'react'
import { render } from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'

import color from './color'
import name from './name'

import { localStorageMiddleware, createStorageListener} from './middlewares/localStorage';

sessionStorage.setItem('name', name)
sessionStorage.setItem('color', color)

const initialMessages = () => {
  if (!localStorage.getItem('messages')) {
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
console.log('test');
