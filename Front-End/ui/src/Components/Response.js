import React from 'react'
import { Link } from 'react-router-dom'

export const Response = ({keyword, text, showLink, hasLink}) => {
    return (
        <div className="response"> 
            {showLink && <h2 >Found in Module X week Y lecture Z: Lecture Name</h2>}
            <p>{text}</p>
            {hasLink && showLink && <Link className='link' to='/lecture'>Go to Lecture</Link>}
        </div>
    )
}

export default Response