import React from 'react'
import { useState} from 'react'
import Button from './Button.js'
import SearchBar from './SearchBar.js'

export const Search = () => {

    const [filter, setFilter] = useState('')

    return (
        <div>
            <div className="brace">
                <Button color='blue' text='Emma' resp ='p' on/>
                <Button color='blue' text='Stephen' resp ='p'/>
                <Button color='blue' text='Saif' resp ='p'/>
            </div>
            <SearchBar inputV = 'Sub' value = '' resp='' sLink = {false} hLink = {true}/>
        </div>
    )
}

export default Search