import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './store';
import './index.scss';
import { App } from './App';
import { HashRouter } from 'react-router-dom';

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__();
// const store = createStore(rootReducer);
const store = createStore(rootReducer, compose(
    applyMiddleware(reduxThunk),
    composeEnhancers
  ));
ReactDOM.render(<Provider store={store}>
                <HashRouter>
                <App />
                </HashRouter>
                </Provider>,
                document.getElementById('root'));
