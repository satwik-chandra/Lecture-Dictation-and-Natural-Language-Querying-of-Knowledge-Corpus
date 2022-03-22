import './App.css';
import Button from './Components/Button.js'
import Response from './Components/Response.js'
import SearchBar from './Components/SearchBar.js'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import video from './videos/r.mp4'
import Title from './Components/Title.js'

  const HomePage = () => {
    return (
          <div className="Container">
            <h1>Hello World</h1>
            <Button color='blue' text='Button For Emma' resp ='p'/>
            <SearchBar title='query: ' inputV = 'Sub' value = '' resp='' hLink = {true}/>
          </div>
        )
      };

  const Header = () => {
    return (
      <div className="header">
        <Title />
      </div>
    )
  }

    
  //export default HomePage;
  const LecturePage = () => {


    return (
      <div className="Container">
        <h1>Lecture Page</h1>
        <Link style={{marginBottom: "20px"}} to='/'>Back</Link>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
         }}
        className='player-wrapper'>
            <ReactPlayer
            style={{marginBottom: "20px",marginTop: "20px"}}
            className='react-player'
            url= {video}
            width='60%'
            height='60%'
            controls = {true}

            />
        </div>
        <SearchBar title='query: ' inputV = 'Sub' value = '' resp='' hLink = {false} />
        
      </div>
    )
  };
  export {LecturePage, HomePage, Header};

