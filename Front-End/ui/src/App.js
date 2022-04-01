import './App.css';
import Button from './Components/Button.js'
import Response from './Components/Response.js'
import SearchBar from './Components/SearchBar.js'
import Search from './Components/Search.js'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import video from './videos/r.mp4'
import Title from './Components/Title.js'

  const HomePage = () => {
    
    return (
          <div className="Container">
            <Search />
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
        <div className='player-wrapper'>
          <Link className = "back" to='/'>Back</Link>
          <ReactPlayer
          className='react-player'
          url= {video}
          width='60%'
          height='60%'
          controls = {true}
          />
        </div>
        <SearchBar title='query: ' inputV = 'Sub' value = '' resp='' sLink = {false} hLink = {false} />
      </div>
    )
  };
  export {LecturePage, HomePage, Header};

