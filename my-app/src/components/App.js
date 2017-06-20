import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import {Row, Col} from 'react-materialize'
import AvatarForm from './AvatarForm.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Avatar Creator',
      name: 'default',
      size: 280,
      borderRadius: 10,
      type: 'robo',
    }

    this.getData = this.getData.bind(this);
    this.changeType = this.changeType.bind(this);
    this.changeName = this.changeName.bind(this);
    this.changeSize = this.changeSize.bind(this);
    this.changeBorderRadius = this.changeBorderRadius.bind(this);
  }

  componentWillMount() {
    this.getData()
  }

  getData() {
    axios.get('https://api.adorable.io/avatars/list', {headers: {'Access-Control-Allow-Origin': '*'}})
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  changeType(type){
    this.setState({
      type: type,
    })
  }

  changeName(name){
    this.setState({
      name: name,
    })
  }

  changeSize(size){
    this.setState({
      size: size,
    })
  }

  changeBorderRadius(value){
    this.setState({
      borderRadius: value,
    })
  }
  render() {
    return (
      <div className="App">
        <div className="form-section">
          <div className="container">
          <h2 className="title is-1">{this.state.title}</h2>
          <Row>
            <Col s={6}>
              <AvatarForm
                changeType={this.changeType}
                changeName={this.changeName}
                changeSize={this.changeSize}
                changeBorderRadius={this.changeBorderRadius}
                size={this.state.size}
                borderRadius={this.state.borderRadius}
                />
            </Col>
            <Col s={6} className="flex-center">
              { (this.state.type === 'urban') ? (
                <img
                src={`https://api.adorable.io/avatars/${this.state.size}/${this.state.name}`}
                style={{
                  borderRadius:`${this.state.borderRadius}%`,
                  width:`${this.state.size}`,
                  height:`${this.state.size}`,
                  margin: 'auto'
                }} alt='' />
              ) : (
                <img
                src={`https://robohash.org/${this.state.name}`}
                style={{
                  borderRadius:`${this.state.borderRadius}%`,
                  width:`${this.state.size}`,
                  height:`${this.state.size}`,
                  backgroundColor: '#313131',
                  margin: 'auto',
                }} alt='' />
              )}
              { (this.state.name !== 'default') ? <h5 className="center-align">Hello <strong>{this.state.name}</strong>!</h5> : null }
            </Col>
          </Row>
          <div className="columns">
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
