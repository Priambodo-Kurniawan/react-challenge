import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import {
  changeSizeAction,
  changeBorderRadiusAction,
} from '../actions';

import './Main.css';
import {Row, Col} from 'react-materialize'
import CustomAvatarForm from './CustomAvatarForm.js'

class Main extends Component {
  componentWillMount() {
    this.getData()
    this.state = {
      eyes: 'eyes1',
      nose: 'nose2',
      mouth: 'mouth3',
      color: 'FF9800',
    }
  }

  getData() {
    axios.get('https://api.adorable.io/avatars/list')
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="Main">
        <div className="form-section">
          <div className="container">
            <Row>
              <Col s={6} className="flex-center">
                <img
                src={`https://api.adorable.io/avatars/face/${this.state.eyes}/${this.state.nose}/${this.state.mouth}/FF9800`}
                style={{
                  borderRadius:`${this.props.face.borderRadius}%`,
                  width:`${this.props.face.size}px`,
                  height:`${this.props.face.size}px`,
                  margin: 'auto'
                }} alt='' />
              </Col>
              <Col s={6}>
                <h5 className="title is-1">{this.props.face.title}</h5>
                <CustomAvatarForm />
              </Col>
            </Row>
            <Row>
              <ul>
                <li className="radio-image">
                  <p>
                    <input name="group1" type="radio" id="test1" value='urban' className='big-radio' />
                    <label htmlFor="test1">
                      <div className="mouth-img-wrapper">
                        <img
                          src={`https://api.adorable.io/avatars/face/${this.state.eyes}/${this.state.nose}/${this.state.mouth}/FF9800`}
                          style={{
                            width:'200px',
                            margin: 'auto'
                          }} alt='' />
                      </div>
                    </label>
                  </p>
                </li>
              </ul>
            </Row>
          <div className="columns">
          </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    face: state.face,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeSize: (size) => dispatch(changeSizeAction(size)),
    changeBorderRadius: (value) => dispatch(changeBorderRadiusAction(value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
