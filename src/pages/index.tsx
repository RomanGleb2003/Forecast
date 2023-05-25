import Home from "@/components/screens/home/Home";
import Head from "next/head";
import React from "react";
import {Inter} from "next/font/google";

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <><Head>
        <title>Romeo Weather</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
        <main className={"text-3xl font-bold bg-indigo-500 underline"}>
            <Home />
        </main>
    </>
  )
}
