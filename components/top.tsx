import Image from 'next/image';
import Link from 'next/link';

interface props {
  text: string;
  link: string;
  img: string;
}

function Wrapper({ text, link, img }: props) {
  return (
    <Link href={link} className="flex items-center gap-3 text-[#B0B0B0]">
      <img alt={text} src={img} className="h-4"></img>
      <span>{text}</span>
    </Link>
  );
}

function Social() {
  return (
    <div className="flex flex-row gap-4 cursor-pointer py-4">
      <Wrapper
        text="Github"
        link="https://github.com/thrishank"
        img="/github.png"
      />
      <Wrapper
        text="Gmail"
        link="mailto:thrishankkalluru@gmail.com"
        img="/gmail.png"
      />
      <Wrapper
        text="Linkedin"
        link="https://linkedin.com/thrishank"
        img="/linkedin.png"
      />
      <Wrapper
        text="Twitter(X)"
        link="https://twitter.com/thrishank"
        img="/twitter.png"
      />
    </div>
  );
}

export default function Top() {
  return (
    <div className="flex flex-col justify-start items-start pt-48">
      {/* <div className="rounded-full overflow-y-hidden h-32 w-32 relative py-8">
        <Image
          src="/thris.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="thrishank"
        />
      </div> */}
      <h1 className="font-bold text-[#03DAC6]">Thrishank</h1>
      <p className="font-normal text-[#B0B0B0]">Freelance Web Developer</p>
      <Social />
    </div>
  );
}
