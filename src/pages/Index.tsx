import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Reviews } from '@/components/Reviews';
import { Mission } from '@/components/Mission';
import { Clients } from '@/components/Clients';
import { Interview } from '@/components/Interview';
import { Stats } from '@/components/Stats';
import { Gallery } from '@/components/Gallery';
import { Team } from '@/components/Team';
import { FAQ } from '@/components/FAQ';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <Reviews />
      <Mission />
      <Clients />
      <Interview />
      <Stats />
      <Gallery />
      <Team />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
