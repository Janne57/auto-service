import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import {store} from './components/redux/store.js';
import {store, persistor} from './components/redux/store';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import { App } from 'components/App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider store={store}>
     {/* <PersistGate loading={null} persistor={persistor}> */}
      <BrowserRouter basename="/Janne57/auto-service">
          <App /> 
      </BrowserRouter>
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//      <Provider store={store}>
//       <BrowserRouter basename="/auto-service">
//         <PersistGate loading={null} persistor={persistor}>
//           <App />
//         </PersistGate>
//       </BrowserRouter>
//     </Provider>
//   </React.StrictMode>
// );