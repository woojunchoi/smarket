import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './container/App';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</Provider>
,
document.getElementById('root'));
registerServiceWorker();
