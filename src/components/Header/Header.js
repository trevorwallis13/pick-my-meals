import React from 'react'
import MainNav from './MainNav';
import '../../styles/Header.scss';

function Header() {
    return (
        <header className="main-header">
            <h1>Meal Picker</h1>
            <MainNav />
        </header>
    )
}

export default Header
