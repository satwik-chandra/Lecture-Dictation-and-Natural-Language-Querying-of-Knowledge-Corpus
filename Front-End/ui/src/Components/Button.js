import React from 'react'
import { useState, useEffect } from 'react'
import Response from './Response.js'
import $ from 'jquery'

export const Button = ({color, text, resp, data}) => {

    const [response, setResponse] = useState(resp)

<<<<<<< HEAD

    const onClick = (_e) => {
        //const respFromServer = fetchResp();
        setResponse("You pressed the Button");
        AccessPython();
=======
    const onClick = (_e) => {
        setResponse(data[0].resp);
>>>>>>> origin/main

        console.log("You pressed the Button");
    }
    const AccessPython = (_e) => {
        $.ajax({
            type: "POST",
            url: "DiscoveryLanguageQuerying.py",
            data: { param: text}
          }).done(function(getResponseList) {
             console.log("Python w")
          });

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
