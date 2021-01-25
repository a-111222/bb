import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';



ReactDOM.render(
  <HashRouter >
    <HashLink>
    <App />
    </HashLink>
  </HashRouter>,
  document.getElementById('root')
);


reportWebVitals();
