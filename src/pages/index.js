import React from 'react';
import Link from 'next/link';
import styles from '../styles/index.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to ReachInbox</h1>
      <p className={styles.description}>
        Your one-stop solution for managing your inbox efficiently.
      </p>
      <Link href="/login">
        <a className={styles.loginButton}>Get Started</a>
      </Link>
    </div>
  );
};

export default HomePage;
