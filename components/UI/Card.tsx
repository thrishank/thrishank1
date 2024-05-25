"use client";
import Link from "next/link";
import React from "react";
import { BackgroundGradient } from "./CardGradient";
import Image from "next/image";

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
      <BackgroundGradient className="rounded-[22px] sm:p-6 bg-[#020024]">
        <div className="flex flex-col justify-start gap-4">
          <Image
            src={img}
            alt="Project"
            height={400}
            width={400}
            className="object-contain"
          />

          <h2 className="font-bold text-white px-4 line-clamp-1 text-base md:text-xl lg:text-2xl">
            {title}
          </h2>
          <p className="font-light text-sm md:text-base lg:text-xl lg:font-normal text-gray-400 px-4 line-clamp-4 md:w-[300px] lg:w-[500px]">
            {description}
          </p>
          <div className="flex justify-start gap-4 px-4">
            {icons.map((item) => (
              <img src={item} width={24} height={24}/>
            ))}
          </div>
          <Link href={link} target="_blank">
            <p className="text-gray-700 px-4">View Source</p>
          </Link>
        </div>
      </BackgroundGradient>
    </>
  );
};

export default Card;
