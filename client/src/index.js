import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './include/bootstrap';
import App from './components/App';
import User from './components/User';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();