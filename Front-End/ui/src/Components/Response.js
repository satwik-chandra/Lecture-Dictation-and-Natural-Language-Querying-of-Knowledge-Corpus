import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

export const Response = ({keyword, text, showLink, hasLink}) => {
    return (
        <div className="response"> 
            {showLink && <h2 >Found in Module X week Y lecture Z: Lecture Name</h2>}
            {hasLink && showLink && <Link className='link' to='/lecture' >Go to Lecture</Link>}
            <p>{text}</p>
        </div>
    )
}

export default Response