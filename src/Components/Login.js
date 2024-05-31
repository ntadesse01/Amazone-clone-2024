import React, { useState } from 'react';
import "./Login.css";
import { Link, useNavigate } from 'react-router-dom';
import { auth } from "./firebase";
import ShareLayout from './ShareLayout';

function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = (e) => {
    e.preventDefault(); // this stops the refresh!!!
    // do the login logic
    auth.signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // logged in, redirect to homepage
        history("/");
      })
      .catch((e) => alert(e.message));
  };

  const register = (event) => {
    event.preventDefault(); // this stops the refresh!!!
    // do the register logic
    auth.createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // created a user and logged in, redirect to homepage
        history("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <ShareLayout>  
      <div className='login'>
        <Link to="/">
          <img
            className="login__logo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG7.png"
            alt="Amazon Logo"
          />
        </Link>
        <div className="login__container">
          <h1>Sign in</h1>
          <form>
            <h5>E-mail</h5>
            <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" />
            <h5>Password</h5>
            <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" />
            <button onClick={login} type='submit' className='login__signInButton'>Sign In</button>
          </form>
          <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
          <button onClick={register} className="login__registerButton">Create Your Amazon Account</button>
        </div>
      </div>
    </ShareLayout>
  );
}

export default Login;
