import { FloatingNav } from '@/components/ui/FloatingNav';
import Contact from '@/pages/Contact';
import Grid from '@/pages/Grid';
import Hero from '@/pages/Hero';
import Projects from '@/pages/Projects';

export default function Home() {
  return (
    <main className="relative bg-black-100 text-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className='w-full max-w-7xl'>
        <FloatingNav 
          navItems={[
            {name: 'Home', link: '#'}
          ]}
        />

        <Hero />
        <Grid />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
