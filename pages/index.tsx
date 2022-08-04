import type { NextPage } from "next";
import Head from "next/head";

import Header from "../components/Header/Header";
import Stories from "../components/Stories/Stories";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Interview Stories</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Stories />
    </div>
  );
};

export default Home;
