import React from 'react'
import { useState, useEffect } from 'react'
import Response from './Response.js'
import $ from 'jquery'

export const Button = ({color, text}) => {

    const onClick = (_e) => {
        console.log(text," has been pressed");
    }

    return (
    <div>
        <button onClick={onClick} 
        style={{backgroundColor: color}}
        className='btn'>{text}</button>
    </div>
    )
}

export default Button
