export const changeTypeAction = (type) => {
  return {
    type: 'CHANGE_TYPE',
    payload: type,
  }
}

export const changeNameAction = (name) => {
  return {
    type: 'CHANGE_NAME',
    payload: name,
  }
}

export const changeSizeAction = (size) => {
  return {
    type: 'CHANGE_SIZE',
    payload: size,
  }
}

export const changeBorderRadiusAction = (value) => {
  return {
    type: 'CHANGE_BORDER_RADIUS',
    payload: value,
  }
}
