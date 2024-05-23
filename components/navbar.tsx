import Link from "next/link";

function Card({ text, link }: any) {
  return (
    <Link href={link}>
      <div className="cursor-pointer text-[#E0E0E0]">{text}</div>;
    </Link>
  );
}

export default function Navbar() {
  return (
    <>
      <div className="flex gap-9">
        <Card text="Home" link="/" />
        <Card text="Blog" link="/blog" />
        <Card text="Projects" link="/projects" />
        <Card text="Contact" link="/contact" />
      </div>
    </>
  );
}
