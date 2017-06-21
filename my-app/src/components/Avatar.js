import React from 'react';

class Avatar extends React.Component {
  render () {
    if(this.props.type === 'robo'){
      return (
        <img
          src={`https://robohash.org/${this.props.name}`}
          style={{
            borderRadius:`${this.props.borderRadius}%`,
            width:`${this.props.size}px`,
            height:`${this.props.size}px`,
            backgroundColor: '#313131',
            margin: 'auto',
          }} alt='' />
      )
    } else if (this.props.type === 'female-pixel'){
      return (
        <img
          src={`https://avatars.dicebear.com/v1/female/${this.props.name}/200.png`}
          style={{
            borderRadius:`${this.props.borderRadius}%`,
            width:`${this.props.size}px`,
            height:`${this.props.size}px`,
            backgroundColor: '#313131',
            margin: 'auto',
          }} alt='' />
      )
    } else if (this.props.type === 'male-pixel'){
      return (
        <img
          src={`https://avatars.dicebear.com/v1/male/${this.props.name}/200.png`}
          style={{
            borderRadius:`${this.props.borderRadius}%`,
            width:`${this.props.size}px`,
            height:`${this.props.size}px`,
            backgroundColor: '#313131',
            margin: 'auto',
          }} alt='' />
      )
    }
    return (
      <img
      src={`https://api.adorable.io/avatars/${this.props.size}/${this.props.name}`}
      style={{
        borderRadius:`${this.props.borderRadius}%`,
        width:`${this.props.size}px`,
        height:`${this.props.size}px`,
        margin: 'auto'
      }} alt='' />
    )
  }
}

export default Avatar;
