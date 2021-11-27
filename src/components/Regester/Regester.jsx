import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import initalizeAuthentaction from '../Firebase/firebase.init';
import "./Regester.css"

initalizeAuthentaction()


const Regester = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')  
    const[user, setUser] = useState({})
    const [error, setError] = useState('')

    const auth = getAuth();

    const handleRegesterFrom =e =>{
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
        .then(result=>{
            const {email, displayName, photoUEL} = result.user;
            const userInfo ={
                name:displayName,
                email:email,
                photo:photoUEL
            }
            setUser(userInfo)
        }).catch(error=>{
            setError(error.message);
        })
    }
    const handleEmailChange = e =>{
        setEmail(e.target.value)
    }
  
    const handlePasswordChange = e =>{
        if(e.target.value.length < 6){
            setError("Password must be 6 charecter");
        }else{
        setPassword(e.target.value)

        }
    }
    return (
        <div className="col-lg-4 offset-4 my-5" id='loginFrom'>
            <h2 className="text-center">Regester here</h2>
            <Form onSubmit={handleRegesterFrom}>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email </Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onBlur={handleEmailChange} />
                  
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onBlur={handlePasswordChange}/>
                </Form.Group>
                <Form.Text className="text-danger">
                        {error}
                    </Form.Text>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                    <Link to="/login">
                    Login here
                </Link>
                </Form.Group>
                <div className="d-grid gap-2 my-3">
                <Button variant="primary" type="submit" className="btn btn-block ">
                    Regestation
                </Button>
                </div>
            </Form>
        </div>
    );
};

export default Regester;