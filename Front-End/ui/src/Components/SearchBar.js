import React from 'react'
import { useState, useEffect} from 'react'
import Response from './Response.js'

export const SearchBar = ({title, inputV, value, resp, link}) => {

    const [newValue, setValue] = useState(value)
    const [response, setResponse] = useState(resp)
    const [showLink, setShowLink] = useState(link)
 
   const fetchResp = async () => {
       const res = await fetch('http://localhost:3001/api/discovery/query/'+newValue)
       console.log('http://localhost:3001/api/discovery/query/'+newValue)
       const data = await res.json()
       console.log(data)
       return data
   }

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit= async (event) => {
        event.preventDefault();
        setResponse('');
        const respFromServer = await fetchResp()
        try {
            setResponse(respFromServer['result']['results'][0]['text']);
            setShowLink(true)
        }catch(err) {
            setResponse('Sorry! No results found :(');
          }
    }

    return (
        <div>
           <form onSubmit={handleSubmit}>
               <label>
                    {title}
                    <input type="text" value={newValue} onChange={handleChange}/> 
                </label> 
                <input type="submit" value={inputV}/>
            </form>
            <Response key ={"1"} text = {response} showLink = {showLink}/>
        </div>
    )
}

export default SearchBar
