import { yellow } from '@mui/material/colors';
import React from 'react'
import { Link } from 'react-router-dom'

function ghi (text, highlight) {
    text = text+''
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return <span> { parts.map((part, i) => 
        <span key={i} style={part.toLowerCase() === highlight.toLowerCase() ? { backgroundColor: 'yellow' } : {} }>
            { part }
        </span>)
    } </span>;
}

export const Response = ({lectureName, timeStamp, keyword, text, showLink, hasLink}) => {

    if(hasLink && showLink) {
        return (
            <div className="response">
                {showLink && <h2>{lectureName}</h2>}
                <div className='cardInfo'>
                    <p><b>Time Stamp:</b></p><p className='timeStamp'> {'"'+timeStamp+'"'}</p>
                    <div className="lecLink">
                        {hasLink && showLink && <Link className= 'link3' to={'/lectures/'+lectureName}>Lecture</Link>}
                    </div>
                </div>
                {ghi(text, keyword)}
            </div>
        )
    }
    else {
        return (
            <div className="response">
                <p>{'Time Stamp: "'+timeStamp+'"'}</p>
                {ghi(text, keyword)}
            </div>
        )
    }
}

export default Response