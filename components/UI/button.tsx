import React from "react";

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
    <button className="inline-flex h-12 w-full md:w-60 md:mt-10 gap-2 animate-shimmer items-center justify-center rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      {postion === "left" && icon}
      {text}
      {postion === "right" && icon}
    </button>
  );
};

export default Button;
