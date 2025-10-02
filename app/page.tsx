
"use client";

import Head from "next/head";
import StorePage from "./store/page";

export default function Home() {
  return (
    <>
      <Head>
        <title>TECHXAGON E-Learning Store</title>
        <meta
          name="description"
          content="Discover courses, books, and tools to accelerate your learning journey."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <StorePage />
    </>
  );
}
