import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, HashRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
// import App3 from './App3';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter basename="/">
    <React.StrictMode>
      <App />
      {/* <App3 /> */}
    </React.StrictMode>
  </HashRouter>
);
