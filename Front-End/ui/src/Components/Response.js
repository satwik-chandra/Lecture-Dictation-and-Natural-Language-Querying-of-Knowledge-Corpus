import React from 'react'
import { Link } from 'react-router-dom'

export const Response = ({keyword, text, showLink, hasLink}) => {

    if(hasLink && showLink) {
        return (
            <div className="response">
                {showLink && <h2>Found in Module X week Y lecture Z: Lecture Name</h2>}
                <div className="lecLink">
                    {hasLink && showLink && <Link to='/lecture'>Lecture</Link>}
                </div>
                <p>{text}</p>
            </div>
        )
    }
    else {
        return (
            <div className="response">
                {showLink && <h2>Found in Module X week Y lecture Z: Lecture Name</h2>}
                <p>{text}</p>
            </div>
        )
    }
}

export default Response