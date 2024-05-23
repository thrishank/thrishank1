import Navbar from "@/components/navbar";
import Top from "@/components/top";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-40 w-1/2 mx-auto">
      <Top />
      <Navbar />
    </div>
  );
}
