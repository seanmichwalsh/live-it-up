import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import './index.css';
import './include/bootstrap';

import App from './components/App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

import registerServiceWorker from './registerServiceWorker';

const middleware = [thunk]; 

const store = createStore(
    rootReducer, 
    applyMiddleware(...middleware)
); 

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

registerServiceWorker();