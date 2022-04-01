import React from 'react'
import Button from './Button.js'
import SearchBar from './SearchBar.js'

export const Search = () => {

    return (
        <div>
            <div className="brace">
                <Button className='btn'  text='Emma' resp ='p' on/>
                <Button className='btn'  text='Stephen' resp ='p'/>
                <Button className='btn'  text='Saif' resp ='p'/>
            </div>
            <SearchBar num = {3} inputV = 'Sub' value = '' sLink = {false} hLink = {true}/>
        </div>
    )
}

export default Search