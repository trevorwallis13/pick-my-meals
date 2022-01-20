import React from 'react';
import SignInForm from './components/SignInForm';
import '../../styles/SignIn.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const SignIn = ({signIn, error, setRoute}) => {
    return (
        <main className="sign-in">
            <Header />
            <section className='sign-in-container'>
                <div className='sign-in-form-container'>
                    <SignInForm signIn={signIn} error={error} setRoute={setRoute}/>
                </div>
            </section>
            <Footer />
        </main>
    )
}

export default SignIn
