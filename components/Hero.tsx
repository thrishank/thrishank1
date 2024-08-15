import React from 'react';
import { Spotlight } from './UI/spotlight';
import { TextGenerateEffect } from './UI/text-generate';
import Button from './UI/button';
import { FaArrowCircleRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="pb-20 pt-36" id="#home">
      <div>
        <Spotlight
          className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
          fill="white"
        />
        <Spotlight
          className="left-full top-10 h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-white bg-grid-black-100/[0.2] dark:bg-black-100 dark:bg-grid-white/[0.02]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
      </div>
      <div className="relative z-10 my-20 flex justify-center">
        <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
          <TextGenerateEffect
            words="Let's Collaborate and create something amazing together"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />
          <p className="mb-4 text-center text-sm md:text-lg md:tracking-widest lg:text-2xl">
            Hi! Iapos&;m Thrishank, a Freelance Full Stack Developer based in
            India
          </p>
          <a href="#about">
            <Button
              text="Projects"
              icon={<FaArrowCircleRight />}
              postion="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
