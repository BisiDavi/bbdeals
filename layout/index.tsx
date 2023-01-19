import type { PropsWithChildren } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Props {
  title: string;
}

export default function Layout({ title, children }: PropsWithChildren<Props>) {
  return (
    <>
      <Head>
        <title>{title}| Best Bullion Deals</title>
        <meta name="description" content="Welcome, find bullions at best prices" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
