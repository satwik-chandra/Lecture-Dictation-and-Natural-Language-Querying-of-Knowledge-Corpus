import React from 'react'
import { useState} from 'react'
import Button from './Button.js'
import SearchBar from './SearchBar.js'

export const Search = () => {

    const [filter, setFilter] = useState('')

    return (
        <div>
            <div className="brace">
                <Button color='#0e73b8' text='Emma' resp ='p' on/>
                <Button color='#0e73b8' text='Stephen' resp ='p'/>
                <Button color='#0e73b8' text='Saif' resp ='p'/>
            </div>
            <SearchBar num = {3} inputV = 'Sub' value = '' resp='' sLink = {false} hLink = {true}/>
        </div>
    )
}

export default Search