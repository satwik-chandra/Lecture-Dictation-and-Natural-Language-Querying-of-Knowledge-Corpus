import React from 'react'
import SearchBar from './SearchBar.js'
import {Link} from 'react-router-dom'
import arrow from '.././images/arrowLeft.png'
import ReactPlayer from 'react-player'

const LecturePage = ({suggestedQ, title, video, videoName}) => {
    return (
        <div>
            <h1 className='lectureTitle'>{title}</h1>
            <Link className='backLink' to='/'>
                <input className = "arrow" type="image" src={arrow} alt="Submit" width="60" height="60"/> 
            </Link>
            <div className='player-wrapper'>
                <ReactPlayer className='react-player' url= {video} width='60%' height='60%' controls = {true}/>
                </div>
            <SearchBar suggestedQ ={suggestedQ} lectureFilter={videoName.replace(/\s/g, "")} title='query: ' inputV = 'Sub' value = '' sLink = {false} hLink = {false} />
        </div>
    )
}

export default LecturePage
