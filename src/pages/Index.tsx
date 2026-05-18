import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Reviews } from '@/components/Reviews';
import { Services } from '@/components/Services';
import { Mission } from '@/components/Mission';
import { Clients } from '@/components/Clients';
import { Interview } from '@/components/Interview';
import { Stats } from '@/components/Stats';
import { VideoShowcase } from '@/components/VideoShowcase';
import { Gallery } from '@/components/Gallery';
import { Team } from '@/components/Team';
import { HomeSeo } from '@/components/HomeSeo';
import { HomeFaq } from '@/components/HomeFaq';
import { Helmet } from 'react-helmet-async';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Helmet>
        <title>The Alpha Omega Hub | Digital Marketing Agency Tampa</title>
        <meta name="description" content="Tampa Bay digital marketing agency helping businesses grow with lead generation, paid ads, sales funnels, websites, video ads, and strategy." />
        <link rel="canonical" href="https://thealphaomegahub.com/" />
        <meta property="og:title" content="The Alpha Omega Hub | Digital Marketing Agency Tampa" />
        <meta property="og:description" content="Tampa Bay digital marketing agency helping businesses grow with lead generation, paid ads, sales funnels, websites, video ads, and strategy." />
        <meta property="og:url" content="https://thealphaomegahub.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://thealphaomegahub.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Alpha Omega Hub | Digital Marketing Agency Tampa" />
        <meta name="twitter:description" content="Tampa Bay digital marketing agency helping businesses grow with lead generation, paid ads, sales funnels, websites, video ads, and strategy." />
        <meta name="twitter:image" content="https://thealphaomegahub.com/og-image.png" />
      </Helmet>
      <Navbar />
      <Hero />
      <Reviews />
      <Services />
      <Clients />
      <VideoShowcase />
      <Mission />
      <Interview />
      <Stats />
      <Gallery />
      <Team />
      <HomeSeo />
      <HomeFaq />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
