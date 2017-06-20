import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import {Row, Col} from 'react-materialize'
import AvatarForm from './AvatarForm.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: 'My React App'
    }

    this.getData = this.getData.bind(this);
  }

  componentWillMount() {
    this.getData()
  }

  getData() {
    axios.get('http://api.adorable.io/avatars/list', {headers: {'Access-Control-Allow-Origin': '*'}})
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  render() {
    return (
      <div className="App">
        <div className="form-section">
          <div className="container">
          <h2 className="title is-1">{this.state.title}</h2>
          <Row>
            <Col s={6}>
              <AvatarForm />
            </Col>
            <Col s={6} className="flex-center">
              <img src="https://api.adorable.io/avatars/285/hello" />
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
