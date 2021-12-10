import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

import App from './App'

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDom.render(<App />, document.getElementById('root')); 

    // Add this in node_modules/react-dom/index.js
   