import Layout from "app/layout/components/Layout";
import React from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: any) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
