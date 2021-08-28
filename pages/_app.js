import '../styles/index.css'
import Head from "next/head";
import React from 'react'



function MyApp({ Component, pageProps }) {
  return (
    <>
      

      <Head>
      <title>Paulo Grillo</title>
      <meta property="og:title" content="My page title" key="title" />
        <link rel="shortcut icon" href="/global/logo05.svg" />
      </Head> 
      <Component {...pageProps} />

      
     
      
    </>
  );
}

export default MyApp;