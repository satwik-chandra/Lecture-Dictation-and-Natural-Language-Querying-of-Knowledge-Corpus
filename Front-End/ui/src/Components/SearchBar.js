import React from 'react'
import { useState, useEffect} from 'react'
import Response from './Response.js'
import mag from '../mag.png'

export const SearchBar = ({inputV, value, resp, sLink, hLink}) => {

    const [newValue, setValue] = useState(value)
    const [response, setResponse] = useState(resp)
    const [showLink, setShowLink] = useState(sLink)
    const [hasLink, setHasLink] = useState(hLink)
    const [allResults, setAllResults] = useState(Array())
    const [numLoaded, setNumLoaded] = useState(0)
 
   const fetchResp = async () => {
       const res = await fetch('http://localhost:3001/api/discovery/query/'+newValue)
       //console.log('http://localhost:3001/api/discovery/query/'+newValue)
       const data = await res.json()
       //console.log(data)
       return data
   }

    const handleChange = (event) => {
       
        setValue(event.target.value);
    }

    useEffect(() => {
        console.log(allResults)
    }, [allResults]);

    const handleSubmit= async (event) => {
        event.preventDefault();
        setShowLink(false)
        setResponse('');
        const respFromServer = await fetchResp()
        console.log(respFromServer)
        const results = respFromServer['result']['results']
        for (let i = 0; i < results.length; i++) {
            try {
                results.push(respFromServer['result']['results'][i]['text'])
                console.log(results.at(i))
            } catch(err) {
                break
            }
          }
        setAllResults(results)
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
                    <input className='searchBar' placeholder= ' Search...' type="text" value={newValue} onChange={handleChange}/> 
                </label> 
                <input className = "mag" type="image" src={mag} alt="Submit" width="18" height="24"/>
            </form>
            <>
                {allResults.map((res, i) => (
                    <Response key ={i} keyword= {newValue} text = {response} showLink = {showLink} hasLink = {hasLink}/>
                ))}
            </>
            
        </div>
    )
}

export default SearchBar
