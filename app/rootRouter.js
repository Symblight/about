import React, { Component } from 'react';
import {
    Route,
    Switch,
} from 'react-router-dom';
import Test from './ui/pages/TestPage';

class rootRouter extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Test} />
      </Switch>
    );
  }
}

export default rootRouter;
