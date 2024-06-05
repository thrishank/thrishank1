import Grid from '@/components/Grid';
import Hero from '@/components/Hero';
import Project from '@/components/Project';
import { FloatingNav } from '@/components/UI/navbar';
import { navItems } from '@/data/data';
import Blog from '@/components/Blog';

export default function Home() {
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-hidden bg-black-100 px-5 sm:px-10">
      <div className="w-full max-w-7xl">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Blog />
        <Project />
      </div>
    </main>
  );
}
