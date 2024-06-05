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
      <div className="relative w-full max-w-xs">
        <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full blur-3xl" />
        <div className="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-4 py-8 shadow-xl">
          <div className="mb-4 flex h-5 w-5 items-center justify-center rounded-full border border-gray-500">
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

          <h1 className="relative z-50 mb-4 text-xl font-bold text-white">
            {title}
          </h1>

          <p className="relative z-50 mb-4 line-clamp-4 text-left font-normal text-slate-500">
            {text}
          </p>

          <Link
            href={link}
            target="_blank"
            className="rounded-lg border border-gray-500 px-4 py-1 text-gray-300"
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
      <div className="mt:10 flex flex-wrap items-baseline justify-center gap-16 p-4 md:gap-12">
        {blogs.map((item, i) => (
          <Card key={i} title={item.title} text={item.text} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
