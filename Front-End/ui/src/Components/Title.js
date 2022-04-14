import React from 'react'
import logo from '.././images/tLogo3.png'
import logo2 from '.././images/Find_Opic_Logo2.png'

export const Title = () => {
    return (
        <div className="title">
            <img className ='logo' src={logo} alt="tLogo" />
            <img className="logo" src={logo2}/>
            <h5 className="copyright">@copyright</h5>
        </div>
    )
}

export default Title
