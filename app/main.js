import ReactDOM from 'react-dom';
import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter as Router } from 'react-router-dom';

const Component = require('./components/App').default;

ReactDOM.render(
  <Router>
    <AppContainer>
      <Component {...window.__APP_INITIAL_STATE__} />
    </AppContainer>
  </Router>,
 document.getElementById('root')
);

if (module.hot) {
  module.hot.accept(() => {
    ReactDOM.render(
      <Router>
        <AppContainer>
          <Component {...window.__APP_INITIAL_STATE__} />
        </AppContainer>
      </Router>,
  document.getElementById('root')
);
  });
}
