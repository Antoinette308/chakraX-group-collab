import React, { useState } from 'react';
import { Button } from '../ui/button';
import './SignUp.css'

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
    const handleSubmit = (e) => {
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
            setSubmitted(true);
            setError(false);
            setEmailError(false);
            setPasswordError(false);
        }
    };

    // Successfully signed-up message
    function successMessage() {
        return (
            <div 
                className="success"
                style={{ display: submitted ? "" : "none" }}
            >
                <h1>Thank you {firstName}, your account has been created</h1>
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
                </form>
            )}
            <div className='messages'>{errorMessage()}{emailErrorMessage()}{passwordErrorMessage()}{successMessage()}</div>
        </div>
    );
}

export default SignUpForm;