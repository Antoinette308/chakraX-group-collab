import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import ButtonLink from '../ButtonLink';
import './SignUp.css';

// Create a new user via API
const createUser = async (userDetails) => {
    try {
        const response  = await fetch('http://localhost:3000/accounts/new-user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userDetails),
        });
        return await response.json();
    } catch (error) {
        console.error("Error adding new user to database:", error);
        return null;
    }
};

function SignUpForm() {
    // States for registration
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName]  = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // States for checking errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    // States for successful sign up
    const [signUpSuccessful, setSignUpSuccessful] = useState(false);
    const navigate = useNavigate();

    // Handle sign up
    useEffect(() => {
        if (signUpSuccessful) {
            setTimeout(() => navigate('/sign-in'), 3000);
        }
    }, [signUpSuccessful]);

    // Handle first name change
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        setSubmitted(false);
    };

    // Handle last name change
    const handleLastName = (e) => {
        setLastName(e.target.value);
        setSubmitted(false);
    };

    // Handle email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
        setEmailError(false);
    };

    // Handle password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
        setPasswordError(false);
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        
        if (firstName === '' || lastName === '' || email === '' || password === '') {
            setError(true);
            setEmailError(false);
            setPasswordError(false);
        } else if (!emailPattern.test(email)) {
            setError(false);
            setEmailError(true);
            setPasswordError(false);
        } else if (password.length < 8) {
            setError(false);
            setEmailError(false);
            setPasswordError(true)
        } else {
            const userDetails = { firstName, lastName, email, password };
            const result = await createUser(userDetails);
            if (result) {
                setSubmitted(true);
                setError(false);
                setEmailError(false);
                setPasswordError(false);
            } else {
                console.error('Failed to create user:', error);
            }
        }
    };

    // Successfully signed-up message
    function successMessage() {
        return (
            <div 
                className="success"
                style={{ display: submitted ? "" : "none" }}
            >
                <h1>Thank you {firstName}, your account has been created!</h1>
                <h1>Redirecting to sign-in page...</h1>
            </div>
        );
    };

    // Error message if error is true
    function errorMessage() {
        return (
            <div 
                className='error'
                style={{ display: error ? '' : "none" }}
                >
                    <h1>Please enter all the fields</h1>
            </div>
        );
    };

    // Email error message if email not valid
    function emailErrorMessage() {
        return (
            <div 
                className='error'
                style={{ display: emailError ? '' : "none" }}
                >
                    <h1>Please enter a valid email</h1>
            </div>
        );
    };

    function passwordErrorMessage() {
        return (
            <div
            className='error'
            style={{ display: passwordError ? '' : "none" }}
            >
                <h1>Password must be 8 or more characters</h1>
            </div>
        )
    }

    // The form
    return (
        <div className='sign-up-div'>
            { !submitted && (
                <form>
                    <label>First name:</label>
                    <input
                        onChange={handleFirstName}
                        value={firstName}
                        type='text'
                    />
                    <label>Last name:</label>
                    <input
                        onChange={handleLastName}
                        value={lastName}
                        type='text'
                    />
                    <label>Email:</label>
                    <input
                        onChange={handleEmail}
                        value={email}
                        type='email'
                    />
                    <label>Password:</label>
                    <input
                        onChange={handlePassword}
                        value={password}
                        type='password'
                    />
                    <Button
                        onClick={handleSubmit}
                        type='submit'>
                        Submit
                    </Button>
                    <ButtonLink
                        route='sign-in' 
                        text ='Already have an account? Click here to sign in'
                        style ={{margin: '10px'}}
                        />
                </form>
            )}
            <div className='messages'>{errorMessage()}{emailErrorMessage()}{passwordErrorMessage()}{successMessage()}</div>
        </div>
    );
}

export default SignUpForm;