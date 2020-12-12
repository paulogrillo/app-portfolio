import '../styles/index.css'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon-icon.png" />
      </Head> 
      <Component {...pageProps} />
      
    </>
  );
}

export default MyApp;