import React from 'react';
import { connect } from 'react-redux';

const AvatarForm = (props) => {
  if(props.face.type === 'robo'){
    return (
      <img
        src={`https://robohash.org/${props.face.name}`}
        style={{
          borderRadius:`${props.face.borderRadius}%`,
          width:`${props.face.size}px`,
          height:`${props.face.size}px`,
          backgroundColor: '#313131',
          margin: 'auto',
        }} alt='' />
    )
  } else if (props.face.type === 'female-pixel'){
    return (
      <img
        src={`https://avatars.dicebear.com/v1/female/${props.face.name}/200.png`}
        style={{
          borderRadius:`${props.face.borderRadius}%`,
          width:`${props.face.size}px`,
          height:`${props.face.size}px`,
          backgroundColor: '#313131',
          margin: 'auto',
        }} alt='' />
    )
  } else if (props.face.type === 'male-pixel'){
    return (
      <img
        src={`https://avatars.dicebear.com/v1/male/${props.face.name}/200.png`}
        style={{
          borderRadius:`${props.face.borderRadius}%`,
          width:`${props.face.size}px`,
          height:`${props.face.size}px`,
          backgroundColor: '#313131',
          margin: 'auto',
        }} alt='' />
    )
  }
  return (
    <img
    src={`https://api.adorable.io/avatars/${props.face.size}/${props.face.name}`}
    style={{
      borderRadius:`${props.face.borderRadius}%`,
      width:`${props.face.size}px`,
      height:`${props.face.size}px`,
      margin: 'auto'
    }} alt='' />
  )
}

const mapStateToProps = (state) => {
  return {
    face: state.face,
  };
}

export default connect(mapStateToProps, null)(AvatarForm);
