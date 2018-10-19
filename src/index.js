import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {store} from './store/store.js';

// Create a reusable render method that we can call more than once
let render = () => {
  // Dynamically import our main App component, and render it

  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('root')
  );
};

if (module.hot) {
  // Support hot reloading of components.
  // Whenever the App component file or one of its dependencies
  // is changed, re-import the updated component and re-render it
  module.hot.accept('./App', () => {
    setTimeout(render);
  });
}

render();
