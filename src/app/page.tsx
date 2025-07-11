
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Impact from '@/components/sections/Impact';
import Story from '@/components/sections/Story';
import Players from '@/components/sections/Players';
import DonateSection from '@/components/sections/DonateSection';
import Partners from '@/components/sections/Partners';
import Video from '@/components/sections/Video';
import BecomePartner from '@/components/sections/BecomePartner';
import Solutions from '@/components/sections/Solutions';
import ServiceProviders from '@/components/sections/ServiceProviders';
import PoweredBy from '@/components/sections/PoweredBy';
import Sponsors from '@/components/sections/Sponsors';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Impact />
        <Story />
        <Solutions />
        <Video />
        <Players />
        <DonateSection />
        <ServiceProviders />
        <PoweredBy />
        <BecomePartner />
        <Partners />
        <Sponsors />
      </main>
      <Footer />
    </>
  );
}
