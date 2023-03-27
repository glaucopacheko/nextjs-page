import React from 'react';

import { Cursor, useTypewriter } from 'react-simple-typewriter'

import BackgroundCicle from '@/components/BackgroundCicle';

const Banner = () => {
  const [text] = useTypewriter({
    words: ['Developer', 'Designer', 'Youtuber'],
    loop: true,
    delaySpeed: 2000
})
  return(

    <section className=" h-screen flex flex-col items-center justify-center text-center overflow-hidden">
            <BackgroundCicle />
            <img
                className=" relative rounded-full h-48 w-48 mx-auto object-cover"
                src="/avatar.jpeg"
                alt=""
            />
            <div className=" z-20">
                <h2 className=" text-2xl md:text-3xl uppercase text-gray-500 pb-2 pt-4 tracking-[15px]">
                    Glauko Pacheco
                </h2>
                <h1 className=" text-3xl lg:text-6xl font-semibold px-10">
                    <span className=" mr-3">{text}</span>
                    <Cursor cursorColor="#F7AB0A" />
                </h1>

            </div>
      
        </section>
  )
};

export default Banner;