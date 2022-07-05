import React from 'react';
import ReactDOM from 'react-dom';
import App from  './App';
import {BrowserRouter } from 'react-router-dom';
import "./index.css";


ReactDOM.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
     ,
    document.getElementById('root')
    );
ReactDOM.render(<h1>Another one</h1>, document.getElementById('root1'));
