import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SignInForm = ({ signIn, error, setRoute }) => {

    const [userDetails, setUserDetails] = useState({email: '', password: ''})

    const handleSignIn = (e) => {
        e.preventDefault();
        signIn(userDetails);
        setUserDetails({email: '', password: ''});
    }
  return(
    <Form onSubmit={handleSignIn}>
        <h2>Sign In</h2>
        {error}
        <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
                type="email" 
                placeholder="Enter email"
                onChange={e => setUserDetails({...userDetails, email: e.target.value})}
                value={userDetails.email}
            >
            </Form.Control>
        </Form.Group>
        <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
                type="password"
                placeholder="Password"
                onChange={e => setUserDetails({...userDetails, password: e.target.value})}
                value={userDetails.password}
            >
            </Form.Control>
        </Form.Group>
            <div className="btn-section">
                <Button variant="dark" type="submit">Sign in</Button>
                <Button variant="outline-dark" onClick={() => setRoute("register")}>Register</Button>
            </div>
    </Form>
  )
}

export default SignInForm;
