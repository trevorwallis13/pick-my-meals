import React from 'react'
import Button from 'react-bootstrap/Button';
import '../../styles/MainNav.scss';


function MainNav({ signOut, signInStatus, setRoute }) {

    let navList;

    if(signInStatus) {
        navList = (
            <ul>
                <li>
                    <Button variant='dark' size='large' className='sign-out-button' onClick={signOut}>
                        Sign out
                    </Button>
                </li>
            </ul>
        )
    } else {
        navList = (
            <ul>
                <li>
                    <Button variant='dark' size='large' className='sign-out-button' onClick={() => setRoute('register')}>
                        Register
                    </Button>
                </li>
                <li>
                    <Button variant='dark' size='large' className='sign-out-button' onClick={() => setRoute('signin')}>
                        Sign in
                    </Button>
                </li>
            </ul>
        )
    }
    
    return (
        <nav className="main-nav">
           {navList}
        </nav>
    )
}

export default MainNav
