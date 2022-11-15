import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {CssBaseline} from "@mui/material";
import { BrowserRouter as Router} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <CssBaseline>
        <Router>
            <App />
        </Router>
    </CssBaseline>
  </React.StrictMode>
);
