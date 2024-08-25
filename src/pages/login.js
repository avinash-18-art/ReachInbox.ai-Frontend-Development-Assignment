import React from 'react';
import GoogleLoginButton from '../components/GoogleLoginButton';
import styles from '../styles/login.module.css';

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h2 className={styles.title}>Login to ReachInbox</h2>
        <GoogleLoginButton />
      </div>
    </div>
  );
};

export default Login;
