import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const RegisterForm = ({ register, setRoute }) => {

    const [newUserDetails, setNewUserDetails] = useState({name: '', email: '', password: ''})

    const handleRegister = (e) => {
        e.preventDefault();
        register(newUserDetails);
        setNewUserDetails({email: '', password: ''});
    }
    
  return(
    <Form onSubmit={handleRegister}>
        <h2>Register</h2>
        <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
                type="text" 
                placeholder="Enter name"
                onChange={e => setNewUserDetails({...newUserDetails, name: e.target.value})}
                value={newUserDetails.name}
            >
            </Form.Control>
        </Form.Group>
        <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
                type="email" 
                placeholder="Enter email"
                onChange={e => setNewUserDetails({...newUserDetails, email: e.target.value})}
                value={newUserDetails.email}
            >
            </Form.Control>
        </Form.Group>
        <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
                type="password"
                placeholder="Password"
                onChange={e => setNewUserDetails({...newUserDetails, password: e.target.value})}
                value={newUserDetails.password}
            >
            </Form.Control>
        </Form.Group>
            <div className="btn-section">
                <Button variant="dark" type="submit">Register</Button>
            </div>
    </Form>
  )
}

export default RegisterForm
