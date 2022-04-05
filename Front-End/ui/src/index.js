import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import {DAG, Agile, LCA, HomePage, Header} from './App';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <Router>
    <Header />
    <Routes>
      <Route exact path='/' element={<HomePage />}/>
      <Route exact path='/lectures/Lecture1IntroductionA' element={<DAG />}/>
      <Route exact path='/lectures/Lecture7AgileDevelopment' element={<Agile />}/>
      <Route exact path='/lectures/Lecture1IntroductionB' element={<LCA />}/>
    </Routes>
    
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
