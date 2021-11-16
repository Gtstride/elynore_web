import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
// import 'jquery'
import './index.css';
import MainApp from './MainApp';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
