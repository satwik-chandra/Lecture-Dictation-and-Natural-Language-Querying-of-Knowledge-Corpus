import React from 'react'
import logo from '.././images/tLogo3.png'

export const Title = () => {
    return (
        <div className="title">
            <img className ='logo' src={logo} alt="tLogo" />
            <h1>Lecture Lookup</h1>
            <h5>@copyright</h5>
        </div>
    )
}

export default Title
