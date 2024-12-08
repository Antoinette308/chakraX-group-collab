import React from 'react';
import SignUpForm from './SignUpForm';
import { useOutletContext } from 'react-router-dom';

function SignUp() {
const theme = useOutletContext();
    return (
        <>
            <SignUpForm theme={theme} />
        </>
    );
}

export default SignUp;