import React from 'react'
import { useState } from 'react'
import Response from './Response.js'

export const Button = ({color, text, resp}) => {

    const [response, setResponse] = useState(resp)

    const onClick = (e) => {
        setResponse('Button Has been Pressed');
        console.log("You pressed the Button");
    }
    return (
    <div>
        <button onClick={onClick} 
        style={{backgroundColor: color}}
        className='btn'>{text}</button>
       <Response key ={"1"} text = {response}/>
    </div>
    )
}

export default Button
