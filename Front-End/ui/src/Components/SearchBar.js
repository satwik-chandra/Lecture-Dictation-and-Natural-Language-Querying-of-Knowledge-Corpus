import React from 'react'
import { useState, useEffect} from 'react'
import Response from './Response.js'

export const SearchBar = ({title, inputV, value, resp}) => {

    const [newValue, setValue] = useState(value)
    const [response, setResponse] = useState(resp)
 
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
            <Response key ={"1"} text = {response}/>
        </div>
    )
}

export default SearchBar
