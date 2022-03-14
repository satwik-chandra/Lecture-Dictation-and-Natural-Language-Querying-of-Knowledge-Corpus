import React from 'react'
import { Link } from 'react-router-dom'

export const Response = ({text, showLink, hasLink}) => {
    return (
        <div>
            {showLink && <h2 style= {{alignItems:"left"}}>Found in Module X week Y lecture Z: Lecture Name</h2>}
            <p>{text}</p>
            {hasLink && showLink && <Link to='/lecture'>Go to Lecture</Link>}
        </div>
    )
}

export default Response