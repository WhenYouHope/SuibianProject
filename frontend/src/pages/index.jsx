import React from "react";
import Head from "next/head";
import TopBar from "@/styledComponents/TopBar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Suibian</title>
      </Head>
        <TopBar />
        <div>Hello World</div>
    </div>
  );
}
