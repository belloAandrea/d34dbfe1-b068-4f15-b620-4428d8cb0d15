import '../styles/globals.css';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      {isLoading && <div>Loading...</div>}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
