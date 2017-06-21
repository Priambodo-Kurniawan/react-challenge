import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'

import store from './store/configureStore';

import {
  Main,
  Page404,
  CustomAvatarPage,
} from './components';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/create" component={CustomAvatarPage} />
              <Route component={Page404} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
