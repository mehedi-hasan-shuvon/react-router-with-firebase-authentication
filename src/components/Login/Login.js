import React from 'react';
import './Login.css'
const Login = () => {
    return (
        <div>
            <h3>please login</h3>
            <div className='google-signin'>
                <button>Sing in using Google</button>
            </div>
            <form>
                <input type="email" name="" id="" placeholder='Your Email' />
                <br />
                <input type="password" name="" id="" placeholder='Password' />
                <br />
                <input type="submit" value="Log in" />
            </form>
        </div>
    );
};

export default Login;