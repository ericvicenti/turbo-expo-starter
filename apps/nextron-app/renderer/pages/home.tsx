import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Button } from "ui";

function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Home - Nextron (with-javascript)</title>
      </Head>
      <div>
        <p>
          ⚡ Electron + Next.js ⚡ -
          <Link href="/next">
            <a>Go to next page</a>
          </Link>
        </p>
        <Button onPress={() => {}} />
        <img src="/images/logo.png" />
      </div>
    </React.Fragment>
  );
}

export default Home;
