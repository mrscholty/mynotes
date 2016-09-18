import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import {Provider} from 'react-redux';
import store from './state/store';
import './index.html';
import './favicon.png';
import './styles/style.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,
    document.getElementById('root')
);



