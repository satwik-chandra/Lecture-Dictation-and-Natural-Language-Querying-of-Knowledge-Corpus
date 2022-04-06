import React from 'react'
import { useState, useEffect} from 'react'
import Response from './Response.js'
import mag from '../mag.png'

export const SearchBar = ({lectureFilter, value, sLink, hLink}) => {

    const [newValue, setValue] = useState(value)
    const [response, setResponse] = useState('Your Answers go here...')
    const [phBool, setPHbool] = useState(true)
    const [showLink, setShowLink] = useState(sLink)
    const [hasLink, setHasLink] = useState(hLink)
    const [allResults, setAllResults] = useState(Array())

   const fetchResp = async () => {
       const res = await fetch('http://localhost:3001/api/discovery/query/'+newValue)
       const data = await res.json()
       return data
   }

    const handleChange = (event) => {
       
        setValue(event.target.value);
    }

    useEffect(() => {
        console.log(allResults)
        console.log(allResults.size)
    }, [allResults]);

    const handleSubmit= async (event) => {
        event.preventDefault();
        setAllResults([])
        setShowLink(false)
        setResponse('');
        const respFromServer = await fetchResp()
        console.log(respFromServer)
        const results = []
        const numResults = respFromServer['result']['matching_results']
        console.log(numResults)
        if (numResults === 0){
            setResponse('sorry no results found...')
            setPHbool(true)
        }
        else {
            
            if(lectureFilter ==='n') {
                for (let i = 0; i < numResults; i++) {
                    try { 
                        setPHbool(false)
                        results.push([respFromServer['result']['results'][i]['TEXT'],
                                    respFromServer['result']['results'][i]['TIME_STAMP'],
                                    respFromServer['result']['results'][i]['Header']])
                    } catch(err) {
                        console.log("you've broken")
                        break
                    }
                }
            }
            else {
                for (let i = 0; i < numResults; i++) {
                    try { 
                        setPHbool(false)
                        if(respFromServer['result']['results'][i]['Header'] == lectureFilter) {
                            results.push([respFromServer['result']['results'][i]['TEXT'],
                            respFromServer['result']['results'][i]['TIME_STAMP'],
                            respFromServer['result']['results'][i]['Header']])
                        }
                    } catch(err) {
                        console.log("you've broken")
                        break
                    }
                }
            }
        setShowLink(true)
        setAllResults(results)
        }
        
    }

    if(phBool) {
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                        <input className='searchBar' placeholder= 'Search...' type="text" value={newValue} onChange={handleChange}/> 
                    </label> 
                    <input className = "mag" type="image" src={mag} alt="Submit" width="24" height="32"/>
                </form>
                <div className = "responsePlaceHolder">
                    <p >{response}</p>
                    <p >Why not try <i>Who is Margaret Hamilton?</i></p>
                </div>
            </div>
        )
    }
    else {
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                        <input className='searchBar' placeholder= 'Search...' type="text" value={newValue} onChange={handleChange}/> 
                    </label> 
                    <input className = "mag" type="image" src={mag} alt="Submit" width="24" height="32"/>
                </form>

                {allResults.map((res, i) => (
                    <Response key ={i} lectureName={res[2]} timeStamp={res[1]} keyword= {newValue} text = {res[0]} showLink = {showLink} hasLink = {hasLink}/>
                ))} 
  
                <div className="stopShake"/>
            </div>

        )
    }
}

export default SearchBar
