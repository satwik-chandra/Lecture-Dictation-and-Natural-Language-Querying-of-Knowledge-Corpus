import React from 'react'
import { useState} from 'react'
import Button from './Button.js'
import SearchBar from './SearchBar.js'

export const Search = () => {

    const [filter, setFilter] = useState('')

    return (
        <div>
            <div className="brace">
                <Button className='btn'  text='Emma' resp ='p' on/>
                <Button className='btn'  text='Stephen' resp ='p'/>
                <Button className='btn'  text='Saif' resp ='p'/>
            </div>
            <SearchBar num = {3} inputV = 'Sub' value = '' resp='' sLink = {false} hLink = {true}/>
        </div>
    )
}

export default Search