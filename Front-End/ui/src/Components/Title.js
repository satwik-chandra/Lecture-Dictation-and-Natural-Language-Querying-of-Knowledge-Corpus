import React from 'react'
import logo from '.././images/tLogo.png'

export const Title = () => {
    return (
        <div className="title">
            <img className ='logo' src={logo} alt="tLogo" />
            <h1>Gordon</h1>
            <h3>@copyright</h3>
        </div>
    )
}

export default Title
