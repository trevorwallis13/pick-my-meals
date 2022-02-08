import React from 'react'
import Button from 'react-bootstrap/Button';
import '../../styles/MainNav.scss';


function MainNav({ signOut, signInStatus, setRoute}) {

    let navList;

    if(signInStatus) {
        navList = (
            <ul>
                <li>
                    <Button variant='dark' size='large' className='sign-out-btn btn' onClick={signOut}>
                        Sign out
                    </Button>
                </li>
            </ul>
        )
    } else {
        navList = (
            <ul>
                <li>
                    <Button variant='dark' size='large' className='register-btn btn' onClick={() => setRoute('register')}>
                        Register
                    </Button>
                </li>
                <li>
                    <Button variant='dark' size='large' className='sign-in-btn btn' onClick={() => setRoute('signin')}>
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
