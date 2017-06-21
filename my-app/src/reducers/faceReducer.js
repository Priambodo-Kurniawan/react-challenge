const initialState = {
  title: 'Avatar Creator',
  name: 'default',
  size: 280,
  borderRadius: 10,
  type: 'robo',
}

export default (state = initialState, action) => {
  if(action.type === 'CHANGE_TYPE') {
    return {...state, type: action.payload};
  }
  else if(action.type === 'CHANGE_NAME') {
    return {...state, name: action.payload};
  }
  else if(action.type === 'CHANGE_SIZE') {
    return {...state, size: action.payload};
  }
  else if(action.type === 'CHANGE_BORDER_RADIUS') {
    return {...state, borderRadius: action.payload};
  }
  return state
}
