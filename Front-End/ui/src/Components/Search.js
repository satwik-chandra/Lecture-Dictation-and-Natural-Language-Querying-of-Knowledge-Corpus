import React from 'react'
import Button from './Button.js'
import SearchBar from './SearchBar.js'

export const Search = () => {

    return (
        <div>
                <div className='btn-group'>
                <div className="brace">
                <Button className='btn'  text='DAG' resp ='p' on/>
                <Button className='btn'  text='LCA' resp ='p'/>
                <Button className='btn'  text='Agile' resp ='p'/>
                </div>
            </div>
            <SearchBar suggestedQ ='Who is Margaret Hamilton' lectureFilter='n' value = '' sLink = {false} hLink = {true}/>
        </div>
    )
}

export default Search