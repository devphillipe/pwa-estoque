import React from 'react';
import ReactDOM from 'react-dom';
import './styles/globals.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Ativar o service worker para suporte offline
serviceWorker.register();
