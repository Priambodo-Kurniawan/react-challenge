import React from 'react'
import {Row, Input, Col} from 'react-materialize'


class AvatarForm extends React.Component {
  render() {
    return (
      <div className="avatar-form">
        <Row>
          <Input s={12} label="Your Name" validate></Input>
        </Row>
        <Row>
          <Col s={12}>
            <span className="label">Size</span>
            <span className="results-label">285px</span>
            <p className="range-field">
            <input type="range" id="test5" min="0" max="100" />
            </p>
          </Col>
        </Row>
        <Row>
          <Col s={12}>
            <span className="label">Border Radius</span>
            <span className="results-label">285px</span>
            <p className="range-field">
            <input type="range" id="test5" min="0" max="100" />
            </p>
          </Col>
        </Row>
      </div>
    )
  }
}

export default AvatarForm;
