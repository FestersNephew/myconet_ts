import { AppProps } from 'next/app';
import Script from 'next/script';
import '../styles/styles.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script src="https://kit.fontawesome.com/79e3956dbb.js" crossOrigin="anonymous" strategy="beforeInteractive" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
