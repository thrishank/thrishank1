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
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.02] bg-grid-black-100/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            words="Let's Collaborate and create something amazing together"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />
          <p className="md:tracking-widest text-sm text-center mb-4 md:text-lg lg:text-2xl">
            Hi! I&apos;m Thrishank, a Freelance Full Stack Developer based in
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
