import Sections from "@/core/sections";
import Head from "next/head";
import { useEffect, useState } from "react";

const Home = () => {
  const [isAnimationFinish, setIsAnimationFinish] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimationFinish(true);
    }, 4000);
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
      <div className={`phrase ${isAnimationFinish ? "h-[40vh]" : "h-[100vh]"}`}>
        {isAnimationFinish ? (
          <div className='absolute mt-8 ml-4 poem-text'>
            <p className='poem'>"En una boda el amor florece,</p>
            <p className='poem'>y la familia es el mejor presente,</p>
            <p className='poem'>con su calor y dulzura enaltecen,</p>
            <p className='poem'>la unión de dos almas que se ofrecen."</p>
            <p className='authors'>- Edgar & Leslie</p>
          </div>
        ) : (
          <div className='absolute w-full h-full flex flex-col items-center justify-center first-text'>
            <p className='text-white px-8 poem text-[2rem]'>
              Por que eres alguien especial para nosotros, nos alegraría que
              asistieras a nuestra
            </p>
            <p className='font-bold text-white text-[4rem] text-italic'>Boda</p>
          </div>
        )}
      </div>
      {isAnimationFinish ? <Sections /> : null}
    </>
  );
};

export default Home;
