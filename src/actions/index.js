
export const addMessage = (text) => ({
  type: 'ADD_MESSAGE',
  id: Date.now(),
  text,
  tabId : sessionStorage.getItem('tab-id'),
  author : sessionStorage.getItem('name'),
  color : sessionStorage.getItem('color')
})
