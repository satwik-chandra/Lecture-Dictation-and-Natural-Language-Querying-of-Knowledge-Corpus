import React from 'react'
import logo from '.././images/tLogo3.png'

export const Title = () => {
    return (
        <div className="title">
            <img className ='logo' src={logo} alt="tLogo" />
            <h1 className="workingTitle">Find-Opic</h1>
            <h5 className="copyright">@copyright</h5>
        </div>
    )
}

export default Title
