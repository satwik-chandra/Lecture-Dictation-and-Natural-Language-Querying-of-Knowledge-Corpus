import React from 'react'

export const Button = ({color, text}) => {
    const onClick = (e) => {
        alert("Ok");
        console.log("You pressed the Button");
    }
    return <button onClick={onClick} 
        style={{backgroundColor: color}}
        className='btn'>{text}</button>
}

export default Button
