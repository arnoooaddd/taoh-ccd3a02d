import { Navbar } from '@/components/Navbar';
import { Reviews } from '@/components/Reviews';
import { Gallery } from '@/components/Gallery';
import { Clients } from '@/components/Clients';
import { Team } from '@/components/Team';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { ReactNode } from 'react';

interface ServicePageLayoutProps {
  children: ReactNode;
}

export const ServicePageLayout = ({ children }: ServicePageLayoutProps) => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      {children}
      <Reviews />
      <Gallery />
      <Clients />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
};
