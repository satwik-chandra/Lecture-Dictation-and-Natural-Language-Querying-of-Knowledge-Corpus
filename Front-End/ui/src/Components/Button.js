import React from 'react'
import { useState, useEffect } from 'react'
import Response from './Response.js'

export const Button = ({color, text, resp}) => {

    const [response, setResponse] = useState(resp)


    const onClick = (_e) => {
        //const respFromServer = fetchResp();
        setResponse("You pressed the Button");
        AccessPython();

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

    // useEffect(() => {
    //    const getResp = async () => {
    //        const respFromServer = await fetchResp()
    //        //setResponse(respFromServer[0].resp)
    //    }

    //     fetchResp()

    // }, [])

//    const fetchResp = async () => {
//         const res = await fetch('http://localhost:5000/responses')
//         const data = await res.json()

//         //console.log(data)
//          return data
//     }

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
