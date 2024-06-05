'use client';
import Link from 'next/link';
import React from 'react';
import { BackgroundGradient } from './CardGradient';
import Image from 'next/image';

const Card = ({
  img,
  title,
  description,
  icons,
  link,
}: {
  img: string;
  title: string;
  description: string;
  icons: string[];
  link: string;
}) => {
  return (
    <>
      <BackgroundGradient className="rounded-[22px] bg-[#020024] sm:p-6">
        <div className="flex flex-col justify-start gap-4">
          <Image
            src={img}
            alt="Project"
            height={400}
            width={400}
            className="object-contain"
          />

          <h2 className="line-clamp-1 px-4 text-base font-bold text-white md:text-xl lg:text-2xl">
            {title}
          </h2>
          <p className="line-clamp-4 px-4 text-sm font-light text-gray-400 md:w-[300px] md:text-base lg:w-[500px] lg:text-xl lg:font-normal">
            {description}
          </p>
          <div className="flex justify-start gap-4 px-4">
            {icons.map((item, i) => (
              <img src={item} width={24} height={24} key={i} />
            ))}
          </div>
          <Link href={link} target="_blank">
            <p className="px-4 text-gray-500">View Source</p>
          </Link>
        </div>
      </BackgroundGradient>
    </>
  );
};

export default Card;
