'use client';
import React from 'react';

const hello = () => {
  console.log('Hello');
};

const Button = ({
  text,
  postion,
  icon,
  handleClick,
  otherClass,
}: {
  text: string;
  icon?: React.ReactNode;
  postion?: string;
  handleClick?: () => void;
  otherClass?: string;
}) => {
  return (
    <button
      className="inline-flex h-12 w-full animate-shimmer cursor-pointer items-center justify-center gap-2 rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 md:mt-10 md:w-60"
      onClick={hello}
    >
      {postion === 'left' && icon}
      {text}
      {postion === 'right' && icon}
    </button>
  );
};

export default Button;
