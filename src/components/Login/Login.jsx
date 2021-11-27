import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import initalizeAuthentaction from '../Firebase/firebase.init';
import "./Login.css"

initalizeAuthentaction()
const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState({})
    const [error, setError] = useState('')


    const { signInUsingGoogle } = useAuth()
    const auth = getAuth();
    const hanleRegestion = e => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                const { email, displayName, photoUEL } = result.user;
                const userInfo = {
                    name: displayName,
                    email: email,
                    photo: photoUEL
                }
                setUser(userInfo)
                setError("")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage)
                // ..
            });
    }
    const handleEmailChange = e => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = e => {

        setPassword(e.target.value)

    }
    return (
        <div className="col-lg-4 offset-4 my-5" id='loginFrom'>
            <h2>Login </h2>
            <Form onSubmit={hanleRegestion} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onBlur={handleEmailChange} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onBlur={handlePasswordChange} />
                    <Form.Text className="text-danger">
                        {error}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                    <Link to="/regester">
                        Regester here
                    </Link>
                </Form.Group>

                
              

                <div className="d-grid gap-2 mt-3">
                    <Button variant="primary" size="md" type="submit">
                        Login
                    </Button>
                    <Button variant="danger" onClick={signInUsingGoogle}  size="md" className="mb-4 mt-2">
                        Google Login
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default Login;