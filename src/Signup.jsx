// src/Signup.js

import React from 'react';
import styles from './Signup.module.css';

const Signup = () => {
  return (
    <div className={styles.signupContainer}>
      <div className={styles.signupBox}>
        <h2>Sign Up</h2>
        <form>
          <div className={styles.inputGroup}>
            <input type="text" id="username" name="username" required />
            <label htmlFor="username">Username</label>
          </div>
          <div className={styles.inputGroup}>
            <input type="email" id="email" name="email" required />
            <label htmlFor="email">Email</label>
          </div>
          <div className={styles.inputGroup}>
            <input type="password" id="password" name="password" required />
            <label htmlFor="password">Password</label>
          </div>
          <button type="submit" className={styles.signupButton}>Sign Up</button>
          <p className={styles.loginText}>Already have an account? <a href="/Login">Login</a></p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
