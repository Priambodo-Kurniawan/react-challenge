import React from 'react';

const FaceComponentChoice = (props) => {
  return (
    <li className="radio-image" style={{width:`${props.width || '135px'}`}} >
      <input name="group1" type="radio" id="test1" value='urban' className='hide-radio' />
      <label htmlFor="test1" style={{
        height: 90,
        padding: 0
      }}>
        <div className={props.className}>
          <img
            src={`https://api.adorable.io/avatars/face/${props.eyes || null}/${props.nose || null}/${props.mouth || null}/FF9800`}
            style={{
              width:'200px',
              margin: 'auto'
            }} alt='' />
        </div>
      </label>
    </li>
  )
}


export default FaceComponentChoice;
