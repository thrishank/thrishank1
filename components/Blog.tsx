import { blogData } from '@/data/data';
import axios from 'axios';
import Link from 'next/link';
import React from 'react';
import { Meteors } from './UI/meteors';

async function getData() {
  // const res = await axios.get("");
  const data = blogData;
  return data;
}
const Card = ({ title, text, link }: any) => {
  return (
    <div className="">
      <div className=" w-full relative max-w-xs ">
        <div className="absolute inset-0 h-full w-full transform scale-[0.80] rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>

          <h1 className="font-bold text-xl text-white mb-4 relative z-50">
            {title}
          </h1>

          <p className="font-normal text-left text-slate-500 mb-4 relative z-50 line-clamp-4">
            {text}
          </p>

          <Link
            href={link}
            target="_blank"
            className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300"
          >
            Read More
          </Link>
          <Meteors number={3} />
        </div>
      </div>
    </div>
  );
};

const Blog = async () => {
  const blogs = await getData();
  return (
    <div className="py-20" id="blog">
      <h1 className="heading pb-8">
        My Recent <span className="text-purple">Blogs</span>
      </h1>
      <div className="flex flex-wrap justify-center items-baseline p-4 gap-16 md:gap-12 mt:10">
        {blogs.map((item, i) => (
          <Card key={i} title={item.title} text={item.text} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
