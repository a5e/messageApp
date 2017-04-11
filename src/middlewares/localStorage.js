
const tabId = Math.floor(Math.random() * 10000)
sessionStorage.setItem('tab-id', tabId)

const storageKey = 'last-message'


export function localStorageMiddleware() {
  return () => next => action => {
      if (!action.fromLocalStorage) {
        localStorage.setItem(storageKey, JSON.stringify(action))
      }
      next(action)
  }
}

export function createStorageListener(store) {
  return event => {
    const receivedAction = JSON.parse(event.newValue)
    if (receivedAction.tabId !== tabId) {
      receivedAction.fromLocalStorage = true
      store.dispatch(receivedAction)
    }
  }
}
