import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {
  Main,
  Page404,
} from './components';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route component={Page404} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
