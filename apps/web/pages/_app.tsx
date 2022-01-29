import * as React from "react";
import Head from "next/head";
import Tamagui from "../tamagui.config";

function MyApp(props) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Tamagui.Provider>
        <ContentInner {...props} />
      </Tamagui.Provider>
    </>
  );
}

function ContentInner({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
