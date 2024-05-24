import Hero from "@/components/Hero";
 
export default function Home() {
  return (
    <div
      style={{
        // https://cssgradient.io/
        background: "rgb(2,0,36)",
        backgroundColor:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(26,26,36,1) 35%, rgba(0,212,255,1) 100%)",
      }}
    >
      <Hero />
    </div>
  );
}
