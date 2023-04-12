import Head from "next/head";

import { Inter } from "next/font/google";

import HomeAnimated from "@/components/HomeAnimated";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Experience from "@/components/Experience";
import Blogs from "@/components/Blogs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const pathName = usePathname();
  const isHome = pathName === "/";
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isHome) {
      return;
    }
  }, [isHome]);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        {isLoading && isHome ? (
          <LoadingScreen finishLoading={() => setIsLoading(false)} />
        ) : (
          <>
            <HomeAnimated />
            <Experience />
            
          </>
        )}
      </main>
    </>
  );
}
