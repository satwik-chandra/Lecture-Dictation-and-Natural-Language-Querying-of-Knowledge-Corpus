import logo from './logo.svg';
import './App.css';
import Button from './Components/Button.js'
import Response from './Components/Response.js'

import { useState, useEffect } from 'react'

function App() {

  const [responses, setResponses] = useState([])

  useEffect(() => {
       const getResp = async () => {
       const respFromServer = await fetchResp()
       setResponses(respFromServer)
       }

      getResp()

    }, [])

  const fetchResp = async () => {
      const res = await fetch('http://localhost:5000/responses')
      const data = await res.json()

      console.log(data)
      console.log(typeof data)
      return data
  }

  return (
    <div className="Container">
      <h1>Hello World</h1>
      <Button color='blue' text='the button' resp ='p' data={responses}/>
    </div>
  );
}

export default App;

