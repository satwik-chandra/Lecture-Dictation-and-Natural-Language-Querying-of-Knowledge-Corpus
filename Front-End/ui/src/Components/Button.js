import React, { useState } from 'react'


export const Button = ({text}) => {

    const handleClick=(e)=>{
        console.log(text, "this is working fine");
        e.preventDefault();
        if (e.target.style.backgroundColor = '#0e73b8'){
            e.target.style.backgroundColor = 'white'
        }
        if (e.target.style.backgroundColor = 'white'){
            e.target.style.backgroundColor = '#0e73b8'
        }
        console.log(e.target);
    }

    return (
    <div>
        
        <button onClick={handleClick}
         className='btn'>{text}</button>
    </div>
    )
}

export default Button