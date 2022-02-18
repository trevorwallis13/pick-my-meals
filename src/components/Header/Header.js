import React from 'react'
import MainNav from './MainNav';
import '../../styles/Header.scss';

function Header({ signOut, signInStatus, setRoute }) {
    return (
        <header className="main-header">
            <div className="header-container">
                <h1>Pick My Meals</h1>
                <MainNav signOut={signOut} signInStatus={signInStatus} setRoute={setRoute}/>
            </div>
        </header>
    )
}

export default Header
