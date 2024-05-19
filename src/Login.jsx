// src/Login.js

import React from 'react';
import styles from '/src/Login.module.css';

const Login = () => {

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <h2>LOGIN</h2>
        <form>
          <div className={styles.inputGroup}>
            <input type="text" id="username" name="username" required />
            <label htmlFor="username">Username</label>
          </div>
          <div className={styles.inputGroup}>
            <input type="password" id="password" name="password" required />
            <label htmlFor="password">Password</label>
          </div>
          <button type="submit" className={styles.loginButton}>Login</button>
          <p className={styles.signupText}>Don't have an account? <a href="Signup">Sign Up</a></p>
        </form>
      </div>
    </div>
  );
}

export default Login;



