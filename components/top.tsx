import Image from "next/image";
import Link from "next/link";

function Social() {
  return (
    <div className="flex flex-row gap-2 cursor-pointer">
      <Link href={"https://github.com/thrishank"}>
        <img src="/github.png" className="h-8 w-8" />
      </Link>
      <Link href={"mailto:thrishankkalluru@gmail.com"}>
        <img src="/svg/gmail.svg" className="h-8 w-8" />
      </Link>
      <Link href={"https://linkedin.com/thrishank"}>
        <img src="linkedin.png" className="h-8 w-8" />
      </Link>
      <Link href={"https://twitter.com/thrishank"}>
        <img src="twitter.png" className="h-8 w-8" />
      </Link>
    </div>
  );
}

export default function Top() {
  return (
    <div className="flex flex-col justify-start items-start">
      {/* <Image src={""} height={10} width={10} fill alt="thrishank" /> */}
      <h1 className="font-bold text-[#03DAC6]">Thrishank</h1>
      <p className="font-normal text-[#B0B0B0]">Freelance Web Developer</p>
      <Social />
    </div>
  );
}
