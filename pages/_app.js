import '../styles/index.css'
import Head from "next/head";



function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/logo05.svg" />
      </Head> 
      <Component {...pageProps} />
      
    </>
  );
}

export default MyApp;