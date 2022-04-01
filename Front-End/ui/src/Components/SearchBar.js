import React from 'react'
import { useState, useEffect} from 'react'
import Response from './Response.js'
import mag from '../mag.png'

export const SearchBar = ({inputV, value, sLink, hLink}) => {

    const [newValue, setValue] = useState(value)
    const [response, setResponse] = useState('Your Answers go here')
    const [phBool, setPHbool] = useState(true)
    const [showLink, setShowLink] = useState(sLink)
    const [hasLink, setHasLink] = useState(hLink)
    const [allResults, setAllResults] = useState([])
 
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
        const results = []
        const numResults = respFromServer['result']['matching_results']
        console.log(numResults)
        if (numResults == 0){
            setResponse('Sorry')
        }
        else {
            for (let i = 0; i < numResults; i++) {
                try {
                    setPHbool(false)
                    results.push(respFromServer['result']['results'][i]['TEXT'])
                    console.log(results.at(i))
                } catch(err) {
                    break
                }
            }
        setShowLink(true)
        setAllResults(results)
        }
        
    }

    return (
        <div>
           <form onSubmit={handleSubmit}>
               <label>
                    <input className='searchBar' placeholder= 'Search...' type="text" value={newValue} onChange={handleChange}/> 
                </label> 
                <input className = "mag" type="image" src={mag} alt="Submit" width="18" height="24"/>
            </form>
            <>
                <p>{phBool && response}</p>
                {allResults.map((res, i) => (
                    <Response key ={i} keyword= {newValue} text = {res} showLink = {showLink} hasLink = {hasLink}/>
                ))}
            </>
            
        </div>
    )
}

export default SearchBar
