import React, { useState } from 'react';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <>
      <Head>
        <title>ReachInbox</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={isDarkMode ? 'dark' : ''}>
        <Component {...pageProps} toggleTheme={toggleTheme} />
      </div>
    </>
  );
}

export default MyApp;
