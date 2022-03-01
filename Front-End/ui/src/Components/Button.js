import React from 'react'
import { useState, useEffect } from 'react'
import Response from './Response.js'
import $ from 'jquery'

export const Button = ({color, text, resp, data}) => {

    const [response, setResponse] = useState(resp)


    const onClick = (_e) => {
        // console.log(typeof data[0])
        // console.log(data[0])
        // console.log(typeof data[0].headers)
        // console.log(data[0].statusText)
        // setResponse(data[0].statusText);
        setResponse("Place Holder until data is formatted correctly");
        console.log("Run Query: '/n' Google and AI");
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
