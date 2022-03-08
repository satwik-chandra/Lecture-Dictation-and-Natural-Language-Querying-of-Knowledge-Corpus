import './App.css';
import Button from './Components/Button.js'
import Response from './Components/Response.js'
import SearchBar from './Components/SearchBar.js'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
  
  const HomePage = () => {
    return (
          <div className="Container">
            <h1>Hello World</h1>
            <Button color='blue' text='Button For Emma' resp ='p'/>
            <SearchBar title='query: ' inputV = 'Sub' value = 't' resp='here'/>
          </div>
        )
      };
    
  //export default HomePage;
  const LecturePage = () => {
    return (
      <div className="Container">
        <h1>Lecture Page</h1>
        <Link to='/'>Back</Link>
      </div>
    )
  };
  export {LecturePage, HomePage};

