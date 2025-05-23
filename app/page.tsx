import About from '@/components/About';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Blog />
      <Contact />
    </main>
  );
}
