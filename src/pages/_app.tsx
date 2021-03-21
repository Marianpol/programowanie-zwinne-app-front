import Layout from "app/layout/components/Layout";
import React from "react";
import { useRouter } from 'next/router';
import "../styles/globals.css";

function MyApp({ Component, pageProps }: any) {

  const { pathname } = useRouter();
  
  if (['/login', '/register'].includes(pathname))
    return <Component {...pageProps}/>

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
