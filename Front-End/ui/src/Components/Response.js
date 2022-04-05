import React from 'react'
import { Link } from 'react-router-dom'

export const Response = ({lectureName, timeStamp, keyword, text, showLink, hasLink}) => {

    if(hasLink && showLink) {
        return (
            <div className="response">
                {showLink && <h2>{lectureName}</h2>}
                <div className='cardInfo'>
                    <p>{'Time Stamp: "'+timeStamp+'"'}</p>
                    <div className="lecLink">
                        {hasLink && showLink && <Link className= 'link3' to={'/lectures/'+lectureName}>Lecture</Link>}
                    </div>
                </div>
                <p>{text}</p>
            </div>
        )
    }
    else {
        return (
            <div className="response">
                <p>{'Time Stamp: "'+timeStamp+'"'}</p>
                <p>{text}</p>
            </div>
        )
    }
}

export default Response