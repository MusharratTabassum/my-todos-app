import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, handleEmailChange, handlePasswordChange,
        error, handleLoginThroughEmail, handleResetPassword } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || "/";

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    }

    return (
        <div>
            <div className='mt-5'>
                <div className="login-form mb-5 ">
                    <form onSubmit={handleLoginThroughEmail}>
                        <h1>Login</h1>
                        <div>
                            <input onBlur={handleEmailChange} className="input-box" type="email" placeholder="write your email" required />

                            <input onBlur={handlePasswordChange} className="input-box" placeholder="write your password" type="password" required />

                            <span className="error"><small>{error}</small></span>
                            {/* <input type="submit" />*/}
                            <button type="submit" className="signup-btn">
                                Login
                            </button>
                            <hr />
                            <p className="or">OR</p>
                            <button onClick={handleGoogleLogin} type="button" className="signup-btn">Continue with google</button>
                            <p>Create an account now <Link to="/register">Register</Link></p>
                            <p>Forget your password?
                                <button className='reset' onClick={handleResetPassword}>Reset</button>
                            </p>


                        </div>

                    </form>
                </div>
            </div>

        </div>
    );
};

export default Login;