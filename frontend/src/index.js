import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import reducer from './reducers';
import { Provider } from 'react-redux';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  /* preloaded state, */
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

/* App will receive store as a prop through Provider */
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, document.getElementById('root')
);

registerServiceWorker();
