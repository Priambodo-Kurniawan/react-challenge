import React from 'react'
import {Row, Input, Col} from 'react-materialize'


class AvatarForm extends React.Component {

  render() {
    return (
      <div className="avatar-form">
        <Row>
          <Input s={12} label="Your Name" validate onChange={(e) => this.props.changeName(e.target.value)}></Input>
        </Row>
        <Row>
          <Col s={12}>
            <span className="label">Size</span>
            <span className="results-label">{this.props.size}px</span>
            <p className="range-field">
            <input type="range" id="test5" min="100" max="285" onChange={(e) => this.props.changeSize(e.target.value)} />
            </p>
          </Col>
        </Row>
        <Row>
          <Col s={12}>
            <span className="label">Border Radius</span>
            <span className="results-label">{this.props.borderRadius}%</span>
            <p className="range-field">
            <input type="range" id="test5" min="0" max="50" onChange={(e) => this.props.changeBorderRadius(e.target.value)} />
            </p>
          </Col>
        </Row>
        <Row>
          <Col s={12}>
            <span className="label">Avatar Type</span>
            <div className="typeRadio">
              <Input s={6} name='type' type='radio' value='urban' label='Urban' className='with-gap' onClick={(e) => this.props.changeType(e.target.value)} />
              <Input s={6} name='type' type='radio' value='male-pixel' label='Male-Pixel' className='with-gap' onClick={(e) => this.props.changeType(e.target.value)} />
              <Input s={6} name='type' type='radio' value='robo' label='Robo' className='with-gap' onClick={(e) => this.props.changeType(e.target.value)} />
              <Input s={6} name='type' type='radio' value='female-pixel' label='Female-Pixel' className='with-gap' onClick={(e) => this.props.changeType(e.target.value)} />
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default AvatarForm;
