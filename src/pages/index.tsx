import Sections from "@/core/sections";
import Head from "next/head";
import { useEffect, useState } from "react";
import { FaCalendarAlt, FaMapMarkedAlt, FaRegClock } from "react-icons/fa";

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
            <p className='poem text-ls'>"En una boda el amor florece,</p>
            <p className='poem text-ls'>y la familia es el mejor presente,</p>
            <p className='poem text-ls'>con su calor y dulzura enaltecen,</p>
            <p className='poem text-ls'>
              la unión de dos almas que se ofrecen."
            </p>
            <p className='authors text-ls'>- Edgar & Leslie</p>
          </div>
        ) : (
          <div className='absolute w-full h-full flex flex-col items-center justify-center first-text'>
            <p className='text-white px-8 poem text-[2rem]'>
              Por que eres alguien especial para nosotros, nos alegraría que
              asistieras a nuestra
            </p>
            <p className='font-bold font-cursive text-white text-[4rem] text-italic'>
              Boda
            </p>
          </div>
        )}
      </div>
      {isAnimationFinish ? (
        <>
          <div className='w-full flex flex-row py-2 px-2 items-center justify-center banner-date'>
            <FaCalendarAlt className='mr-8 scale-150' />
            <div className='font-alkatra'>
              <p className='text-center'>Fecha del evento</p>
              <p>17 de Marzo del 2024</p>
            </div>
            <FaRegClock className='mx-8 scale-150' />
            <div className='font-alkatra'>
              <p className='text-center'>Hora del evento</p>
              <p>16:00 a 22:00</p>
            </div>
          </div>
          <Sections />
          <div className='py-4 banner-date'>
            <div className='flex flex-row justify-center items-center font-alkatra'>
              <FaMapMarkedAlt className='mr-4 scale-150' />
              <p className='text-mm'>Ubicación del evento</p>
            </div>
            <p className='px-4 text-center font-alkatra'>
              <b>Dirección:</b> Av. 661 300, Pueblo de San Juan de Aragón,
              Gustavo A. Madero, 07979 Ciudad de México, CDMX
            </p>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Home;
