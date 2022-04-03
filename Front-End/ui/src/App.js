import './App.css';
import SearchBar from './Components/SearchBar.js'
import Search from './Components/Search.js'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'
import video from './videos/r.mp4'
import Title from './Components/Title.js'
import arrow from './arrowLeft.png'


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
        <Link className='backLink' to='/'>
        <input className = "arrow" type="image" src={arrow} alt="Submit" width="60" height="60"/> 
        </Link>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
         }}
        className='player-wrapper'>
            <ReactPlayer
            style={{marginBottom: "20px",marginTop: "20px", border: "50px, solid, black"}}
            className='react-player'
            url= {video}
            width='60%'
            height='60%'
            controls = {true}
            />
        </div>
        <SearchBar title='query: ' inputV = 'Sub' value = '' sLink = {false} hLink = {false} />
      </div>
    )
  };
  export {LecturePage, HomePage, Header};

