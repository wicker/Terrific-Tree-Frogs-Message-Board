import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import reducer from './reducers'
import { Provider } from 'react-redux'

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

/* App will receive store as a prop through Provider */
ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>, document.getElementById('root'));

registerServiceWorker();
