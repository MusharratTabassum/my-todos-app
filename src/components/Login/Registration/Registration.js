import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Registration = () => {
    const { signInUsingGoogle, handleEmailChange, handleNameChange, handlePasswordChange, handleRegistrationThroughEmail, error, name } = useAuth();
    return (
        <div className='mt-5'>
            <div className="login-form mb-5">

                <form onSubmit={handleRegistrationThroughEmail}>
                    <h1>Register</h1>
                    <div>

                        <input onBlur={handleNameChange} className="input-box" type="text" defaultValue={name} placeholder="write your name" />
                        <input onBlur={handleEmailChange} className="input-box" type="email" placeholder="write your email" required />

                        <input onBlur={handlePasswordChange} className="input-box" placeholder="write your password" type="password" required />

                        <span className="error"><small>{error}</small></span>
                        {/* <input type="submit" />*/}
                        <button type="submit" className="signup-btn">
                            Register
                        </button>

                        <hr />
                        <p className="or">OR</p>

                        <button onClick={signInUsingGoogle} type="button" className="signup-btn">Continue with google</button>

                        <p>Already have an account? <Link to="/login">Sign in</Link></p>
                    </div>

                </form>
            </div>

        </div>
    );
};

export default Registration;