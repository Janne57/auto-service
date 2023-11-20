import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {store } from './components/redux/store';
import { Provider } from 'react-redux';
import { App } from 'components/App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
     <Provider store={store}>
      <BrowserRouter basename="/auto-service">
          <App /> 
      </BrowserRouter>
    </Provider>   
);

