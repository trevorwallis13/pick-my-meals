import { useState, useEffect } from 'react';
import MealPicker from './MealPicker';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import SignIn from '../components/SignIn/SignIn';
import Register from '../components/SignIn/Register';
import { userList } from '../data/userList';

const App = () => {
    const [signInStatus, setSignInStatus] = useState(false);
    const [route, setRoute] = useState('signin');
    const [error, setError] = useState('');
    const [users, setUsers] = useState(userList);
 
    const signIn = (userDetails) => {
        console.log(userDetails);
        if(userDetails.email === users[0].email && userDetails.password === users[0].password) {
            setSignInStatus(true);
            setRoute("home");
        } else {
            setError("Invalid username or password!");
        }
    }

    const register = (userDetails) => {
        setUsers(users => {
            users.push(userDetails);
            return users
        })
        console.log(users);
        setSignInStatus(true);
        setRoute("home");
    }

    const signOut = () => {
        setSignInStatus(false);
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
                <Header signOut={signOut} signInStatus={signInStatus} setRoute={setRoute}/>
                <MealPicker />
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
                <Register register={register} setRoute={setRoute}/>
            </main>
        )
    }
}

export default App
