// src/Signup.js

import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from './supabaseClient';
import styles from './Signup.module.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const lastSignupAttempt = useRef(Date.now());

  const handleSignup = async (e) => {
    e.preventDefault();
    
    const now = Date.now();
    if (now - lastSignupAttempt.current < 60000) { // 1 minute rate limit
      setError("Please wait a minute before trying again.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    lastSignupAttempt.current = now;

    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (signUpError) {
      setError(signUpError.message);
      return;
    }

    const userId = data.user.id;

    const { error: profileError } = await supabase
      .from('profiles')
      .insert([{ id: userId, username }]);

    if (profileError) {
      setError(profileError.message);
    } else {
      alert('Signup successful! Please check your email for a confirmation link.');
      setError(null); // Clear any previous errors
    }
  };

  return (
    <div className={styles.signupContainer}>
      <div className={styles.signupBox}>
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              id="username"
              name="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="username">Username</label>
          </div>
          <div className={styles.inputGroup}>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className={styles.inputGroup}>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password">Password</label>
          </div>
          <div className={styles.inputGroup}>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <label htmlFor="confirmPassword">Confirm Password</label>
          </div>
          {error && <p className={styles.error}>{error}</p>}
          <button type="submit" className={styles.signupButton}>Sign Up</button>
          <p className={styles.loginText}>Already have an account? <Link to="/">Login</Link></p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
