// import App from 'next/app'
import Head from 'next/head';
import '../styles/index.css';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>College Kings</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Just an innocent freshman at San Vallejo College, you are oblivious to the path that lays ahead of you. Growing up gets real when you learn about the unique cultures of the place you must call home. As loyalties form and tensions rise can you lead your fraternity to the crown and with it become the king on campus?"
        />
        <meta property="og:title" content="College Kings" />
        <meta
          property="og:description"
          content="Just an innocent freshman at San Vallejo College, you are oblivious to the path that lays ahead of you. Growing up gets real when you learn about the unique cultures of the place you must call home. As loyalties form and tensions rise can you lead your fraternity to the crown and with it become the king on campus?"
        />
        <meta property="og:url" content="https://collegekingsgame.com/" />
        <meta property="og:type" content="website" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
