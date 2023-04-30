import Sections from "@/core/sections";
import Head from "next/head";
import { useEffect, useState } from "react";

const Home = () => {
  const [isAnimationFinish, setIsAnimationFinish] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimationFinish(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Mi boda Edgar y leslie</title>
      </Head>
      <div
        className={`image-header ${
          isAnimationFinish ? "h-[40vh]" : "h-[100vh]"
        }`}
      ></div>
      <div
        className={`courtain ${isAnimationFinish ? "h-[40vh]" : "h-[100vh]"}`}
      ></div>
      {isAnimationFinish ? <Sections /> : null}
    </>
  );
};

export default Home;
