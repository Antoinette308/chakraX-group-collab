import React, { useState } from 'react';
import styles from '../../styles/SignIn.module.css';


function SignInForm() {
    return (
        <>
            <form>
                <label className={styles.label}>Username</label>
                <input type="text" placeholder="Enter your username..." className={styles.input} />
                <label className={styles.label}>Password</label>
                <input type="password" placeholder="Enter your password..." className={styles.input} />
                <button className={styles.forgotPassword}>Forgot Password?</button>
                <button className={styles.login}>LOGIN</button>
                <button className={styles.orSignUpUsing}>Or Sign Up Using</button>
                <button className={styles.singUp}>SIGN UP</button>
            </form>
        </>
    );
}

export default SignInForm;