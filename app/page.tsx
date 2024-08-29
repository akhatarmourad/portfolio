import { FloatingNav } from '@/components/ui/FloatingNav';
import { navItems } from '@/data';
import Contact from '@/pages/Contact';
import Experiences from '@/pages/Experiences';
import Grid from '@/pages/Grid';
import Hero from '@/pages/Hero';
import Projects from '@/pages/Projects';
import Skills from '@/pages/Skills';
import Testimonials from '@/pages/Testimonials';

export default function Home() {
  return (
    <main className="relative bg-black-100 text-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className='w-full max-w-7xl'>
        <FloatingNav navItems={navItems} />

        <Hero />
        <Grid />
        <Projects />
        <Skills />
        <Experiences />
        <Testimonials />
        <Contact />
      </div>
    </main>
  );
}
