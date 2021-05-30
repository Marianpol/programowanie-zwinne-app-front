import Layout from "app/layout/components/Layout";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SWRConfig } from "swr";
import "../styles/globals.css";

const fetcher = async (url: string) => {
  const res = await fetch(url);

  if (!res.ok) {
    const error = new Error("Wystąpił błąd podczas pobierania danych.");

    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

function MyApp({ Component, pageProps }: any) {
  return (
    <SWRConfig value={{ fetcher }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer />
    </SWRConfig>
  );
}

export default MyApp;
