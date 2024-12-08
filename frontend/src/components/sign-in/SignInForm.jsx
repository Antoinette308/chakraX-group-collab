import { useState } from 'react';
import styles from '../../styles/SignIn.module.css';
import { useNavigate } from 'react-router-dom';


function SignInForm() {

    // States for sign in
    // const [username, setUsername] = useState('');  // Would username be a combination of the first and last name from SignUpForm.jsx?
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');  // Use the email input from the SignUpForm page?

    // Set states for checking errors with the form submission
    const [submitted, setSubmitted] = useState(false); // If the form is submitted then set to true
    const [error, setError] = useState(false); // If there is an error then set to true
    const navigate = useNavigate();  // Use the navigate function from react-router-dom to navigate to the sign-up page using the onClick event


    // A function to fetch the user data through API call could go here


    // Function to handle email
    const handleEmail = (e) => {
        console.log(e.target.value)
        setEmail(e.target.value);

        setSubmitted(false); // If the user is typing then set to false
    };

    // Function to handle password 
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false); // If the user is typing then set to false
    };

    async function loginUser(){
        const url = "http://localhost:3000/accounts/login";

        try{
            const response = await fetch(url, 
                {
                    method: "POST",
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
                });
                if(!response.ok){
                    throw new Error(`Response Status: ${response.status}`)
                }
                const json = await response.json()
                    console.log(json)
                    return json;
                }
                catch(err){
                    console.error(err.message);
                }
        }


    // Funtion to handle the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === '' || password === '') {
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
            
            // The sign-in functionallity will be added here
            loginUser().then(res => {
                console.log(res);
                localStorage.setItem("token", JSON.stringify(res.token))
                localStorage.setItem('user', res.user)
            })
        }
    };


    // Successfully signed-in message
    function successMessage() {
        return (
            <div 
                className="success"
                style={{ display: submitted ? "" : "none" }}
            >
                <h1>Welcome back, {email}!</h1>
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

        

    return (
        <>
            <form className={styles.form} onSubmit={handleSubmit}>
                <label className={styles.label}>Email</label>
                <input type="email" placeholder="Enter your email..." className={styles.input} onChange={handleEmail} value={email} />
                <label className={styles.label}>Password</label>
                <input type="password" placeholder="Enter your password..." className={styles.input} onChange={handlePassword} value={password} />
                <button type="button" className={styles.forgotPassword}>Forgot Password?</button>
                <button type="submit" className={styles.login}>LOGIN</button>  {/* Use the onClick event to send data to backend for auth and navigate to the home page? */}
                <button type="button" className={styles.orSignUpUsing} onClick={() => navigate('/sign-up')}>Or Sign Up Using</button>  {/* This button will navigate to the sign-up page */}
                <button type="button" className={styles.singUp} onClick={() => navigate('/sign-up')}>SIGN UP</button>  {/* This button will navigate also navigate to the sign-up page */}
            </form>
            <div className='messages'>{errorMessage()}{successMessage()}</div>
        </>
    );
}

export default SignInForm;