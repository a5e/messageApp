const message = (state, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        id: action.id,
        text: action.text,
        tabId: action.tabId,
        color: action.color,
        author: action.author
      }
    default:
      return state
  }
}

const messages = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return [
        ...state,
        message(undefined, action)
      ]
    default:
      return state
  }
}

export default messages
