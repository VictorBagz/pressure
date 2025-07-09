import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Impact from '@/components/sections/Impact';
import Story from '@/components/sections/Story';
import Players from '@/components/sections/Players';
import DonateSection from '@/components/sections/DonateSection';
import Partners from '@/components/sections/Partners';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Impact />
        <Story />
        <Players />
        <DonateSection />
        <Partners />
      </main>
      <Footer />
    </>
  );
}
