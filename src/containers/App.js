import { useState } from 'react';
import MealPicker from './MealPicker';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import SignIn from '../components/SignIn/SignIn';
import Register from '../components/SignIn/Register';

const App = () => {
    const [signInStatus, setSignInStatus] = useState(false);
    const [route, setRoute] = useState('signin');
    const [error, setError] = useState('');
    const [currentUser, setCurrentUser] = useState('');
    
    const signIn = (userDetails) => {

        fetch('https://sleepy-island-59889.herokuapp.com/signin', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: userDetails.email,
                password: userDetails.password
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user.id) {
                    setSignInStatus(true);
                    setCurrentUser(user);
                    setError('');
                    setRoute("home");
                } else {
                    setError("Invalid email or password!");
                }
            });
    }

    const register = (userDetails) => {

        fetch('https://sleepy-island-59889.herokuapp.com/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(userDetails)
        })
            .then(response => response.json())
            .then(user => {
                if(user.id) {
                    setSignInStatus(true);
                    setCurrentUser(user);
                    setError('');
                    setRoute("home");
                } else {
                    setError("Invalid credentials!");
                }
            });
    }

    const signOut = () => {
        setSignInStatus(false);
        setError('');
        setCurrentUser('');
        setRoute('signin');
    }

    const routeToRegister = () => {
        setRoute('register');
    }

    const routeToSignIn = () => {
        setRoute('signin');
    }
    
    if(route === 'home') {
        return (
            <main>
                <Header 
                    setRoute={setRoute} 
                    signOut={signOut} 
                    signInStatus={signInStatus} 
                    routeToRegister={routeToRegister} 
                    routeToSignIn={routeToSignIn}/>
                <MealPicker 
                    currentUser={currentUser}/>
                <Footer />
             </main>
        )
    }

    if(route === 'signin') {
        return (
            <main>
                <SignIn signIn={signIn} error={error} setRoute={setRoute}/>
            </main>
        )
    }

    if(route === 'register') {
        return (
            <main>
                <Register register={register} error={error} setRoute={setRoute}/>
            </main>
        )
    }
}

export default App
