import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App, { Header1 } from './App';
import {HomePage, LecturePage, Header} from './App';
import reportWebVitals from './reportWebVitals';
//import { Router } from 'express';

ReactDOM.render(
  <Router>
     <Header />
    <Routes>
      <Route exact path='/' element={<HomePage />}/>
      <Route exact path='/lecture' element={<LecturePage />}/>
    </Routes>
  </Router>,
  

   

   //<React.StrictMode>
   // <App />
   //</React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
