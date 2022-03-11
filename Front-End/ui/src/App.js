import './App.css';
import Button from './Components/Button.js'
import Response from './Components/Response.js'
import SearchBar from './Components/SearchBar.js'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import video from './r.mp4'


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
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
         }}
        className='player-wrapper'>
            <ReactPlayer
            className='react-player'
            url= {video}
            width='60%'
            height='60%'
            controls = {true}

            />
        </div>
        
      </div>
    )
  };
  export {LecturePage, HomePage};

