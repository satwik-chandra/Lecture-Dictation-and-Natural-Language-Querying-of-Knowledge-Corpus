import React from 'react'
import { useState, useEffect } from 'react'
import Response from './Response.js'
import $ from 'jquery'

export const Button = ({color, text, resp, data}) => {

    const [response, setResponse] = useState(resp)


    const onClick = (_e) => {
        //const respFromServer = fetchResp();
        setResponse(data[0]);
        //AccessPython();

        console.log("Run Query: '/n' Google and AI");
    }
    // const AccessPython = (_e) => {
    //     $.ajax({
    //         type: "POST",
    //         url: "DiscoveryLanguageQuerying.py",
    //         data: { param: text}
    //       }).done(function(getResponseList) {
    //          console.log("Python w")
    //       });

    // }

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
