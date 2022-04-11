import { getAuth } from 'firebase/auth';
import React from 'react';
// import useFirebase from '../../hooks/useFirebase';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import app from '../../firebase.init';
import './Login.css'

const auth = getAuth(app);
const Login = () => {
    // const { signInWithGoogle } = useFirebase();
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    return (
        <div>
            <h3>please login</h3>
            <div className='google-signin'>
                <button onClick={() => signInWithGoogle()}>Sing in using Google</button>
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