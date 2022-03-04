import React from 'react'
import { useState, useEffect } from 'react'
import Response from './Response.js'
import $ from 'jquery'

export const Button = ({color, text, resp, data}) => {

    const [response, setResponse] = useState(resp)


    const onClick = (_e) => {
        setResponse(data['result']['results'][0]['text']);
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
