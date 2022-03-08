import React from 'react'
import { Link } from 'react-router-dom'

export const Response = ({text, showLink}) => {
    return (
        <div>
            <p>{text}</p>
            {showLink && <Link to='/lecture'>Go to Lecture</Link>}
        </div>
    )
}

export default Response