import React from 'react'
import Button from './Button.js'
import SearchBar from './SearchBar.js'

export const Search = () => {

    return (
        <div>
                <div className='btn-group'>
                <div className="brace">
                <Button className='btn'  text='Emma' resp ='p' on/>
                <Button className='btn'  text='Stephen' resp ='p'/>
                <Button className='btn'  text='Saif' resp ='p'/>
                </div>
            </div>
            <SearchBar lectureFilter='n' value = '' sLink = {false} hLink = {true}/>
        </div>
    )
}

export default Search