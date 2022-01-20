import React from 'react';
import RegisterForm from './components/RegisterForm';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import '../../styles/SignIn.scss';

const Register = ({register, setRoute}) => {
    return (
        <main className="sign-in">
            <Header setRoute={setRoute}/>
            <section className='sign-in-container'>
                <div className='sign-in-form-container'>
                    <RegisterForm register={register} setRoute={setRoute}/>
                </div>
            </section>
            <Footer />
        </main>
    )
}

export default Register
