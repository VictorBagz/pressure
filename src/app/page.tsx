import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Impact from '@/components/sections/Impact';
import Story from '@/components/sections/Story';
import Players from '@/components/sections/Players';
import DonateSection from '@/components/sections/DonateSection';
import Partners from '@/components/sections/Partners';
import Video from '@/components/sections/Video';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AnimateOnScroll>
          <Impact />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Story />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Video />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Players />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <DonateSection />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Partners />
        </AnimateOnScroll>
      </main>
      <Footer />
    </>
  );
}
