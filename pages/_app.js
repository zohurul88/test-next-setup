import React from "react";
import App from "next/app";
import { wrapper } from "../redux/store/index";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/style/app.scss";
import Head from "next/head";
const MyApp = (props) => {
  const { Component, pageProps, config } = props;
  return (
    <>
      <Head>
        <title>Test Backhouse</title>
      </Head>
      <Component baseUrl={config.baseUrl} {...pageProps} />
    </>
  );
};

MyApp.getInitialProps = async (appContext) => {
  const { ctx } = appContext;
  const { req } = ctx;
  const appProps = await App.getInitialProps(appContext);

  const baseUrl = process.env.BASEURL;

  return {
    ...appProps,
    config: { baseUrl },
  };
};

export default wrapper.withRedux(MyApp);
