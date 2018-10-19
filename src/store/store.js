import {createStore, applyMiddleware, compose} from 'redux';
import freeze from 'redux-freeze';
import reducers from '../reducers/index.js';

// middleware array to inject
let middlewares = [];

// add the freeze dev middleware
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(freeze);
}

// apply the middleware(s)
let middleware = applyMiddleware(...middlewares);

// add redux dev tools
if (process.env.NODE_ENV !== 'production' && window.devToolsExtension) {
  middleware = compose(middleware, window.devToolsExtension());
}

// create the store
const store = createStore(reducers, middleware);

// export
export { store };