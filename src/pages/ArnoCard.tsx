import { motion } from 'framer-motion';
import { Mail, Phone, Globe, MessageCircle, Download, Smartphone, Info, Instagram } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import arnaudImg from '@/assets/team/arnaud.webp';
import logoFull from '@/assets/logo-full-white-transparent.png';

const ArnoCard = () => {
  const generateVCard = () => {
    const photoUrl = window.location.origin + '/assets/team/arnaud.webp';
    const vcard = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'N:Adornier;Arno;;;',
      'FN:Arno Adornier',
      'ORG:The Alpha Omega Hub',
      'TITLE:CEO, The Alpha Omega Hub',
      'TEL;TYPE=CELL:+17273588135',
      'EMAIL:arno@thealphaomegahub.com',
      'URL:https://thealphaomegahub.com/',
      'X-SOCIALPROFILE;TYPE=instagram;x-user=arno.adornier:https://instagram.com/arno.adornier',
      'NOTE:Helping established Tampa Bay businesses build predictable growth through digital marketing. | Also known as Arnaud E. L. Utille Adornier',
      `PHOTO;VALUE=URI:${photoUrl}`,
      'END:VCARD',
    ].join('\r\n');

    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'arno-adornier-contact.vcf';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <Helmet>
        <title>Arno's contact page | The Alpha Omega Hub</title>
        <meta name="robots" content="noindex, nofollow, noarchive, nosnippet" />
        <meta name="googlebot" content="noindex, nofollow" />
        <meta property="og:title" content="Arno's contact page | The Alpha Omega Hub" />
        <meta property="og:image" content="https://taoh.lovable.app/images/arno-og.png" />
        <meta property="og:type" content="profile" />
      </Helmet>
      <div className="min-h-screen bg-[hsl(220,25%,6%)] text-white relative overflow-hidden">
      <Link to="/?utm_source=contact_card&utm_campaign=aa" className="absolute top-4 left-4 z-20">
        <img src={logoFull} alt="The Alpha Omega Hub" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
      </Link>
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[hsl(220,60%,15%)] blur-[150px] opacity-40" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[hsl(250,40%,12%)] blur-[120px] opacity-30" />
      </div>

      <div className="relative z-10 max-w-md mx-auto px-5 py-12 pt-16 flex flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center gap-5 w-full"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-[hsl(42,100%,50%)] blur-2xl opacity-15 scale-110" />
            <img src={arnaudImg} alt="Arno Adornier" className="relative w-32 h-32 rounded-full object-cover border-2 border-white/10 shadow-2xl" />
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-display font-bold tracking-tight">Arno Adornier</h1>
            <p className="text-sm text-white/40 font-light tracking-wide">Arnaud E. L. Utille Adornier</p>
            <p className="text-base text-[hsl(42,100%,55%)] font-medium">CEO, The Alpha Omega Hub</p>
          </div>
          <p className="text-white/60 text-sm leading-relaxed max-w-xs">
            Helping established Tampa Bay businesses build predictable growth through digital marketing.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="w-full">
          <button onClick={generateVCard} className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-[hsl(42,100%,50%)] text-[hsl(220,25%,8%)] font-semibold text-base hover:bg-[hsl(42,100%,55%)] transition-all duration-300 shadow-lg shadow-[hsl(42,100%,50%)]/20 hover:shadow-[hsl(42,100%,50%)]/30 hover:scale-[1.01] active:scale-[0.99]">
            <Download className="w-5 h-5" />
            Save Contact on My Phone
          </button>
          <div className="mt-3 flex items-center justify-center gap-4 text-white/50">
            <span className="flex items-center gap-1.5 text-xs"><Phone className="w-3.5 h-3.5" /> Phone</span>
            <span className="flex items-center gap-1.5 text-xs"><Mail className="w-3.5 h-3.5" /> Email</span>
            <span className="flex items-center gap-1.5 text-xs"><MessageCircle className="w-3.5 h-3.5" /> WhatsApp</span>
            <span className="flex items-center gap-1.5 text-xs"><Instagram className="w-3.5 h-3.5" /> Instagram</span>
          </div>
          <p className="mt-2 text-center text-[11px] text-white/30">All included in the contact file</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="w-full">
          <a href="https://thealphaomegahub.com/" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-2xl border-2 border-[hsl(42,100%,50%)] text-[hsl(42,100%,55%)] font-semibold text-base hover:bg-[hsl(42,100%,50%)]/10 transition-all duration-300">
            <Globe className="w-5 h-5" />
            View Services
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.45 }} className="w-full flex flex-col items-center gap-2 pt-4">
          <div className="flex items-start gap-2 text-white/25 text-xs leading-relaxed text-center max-w-xs">
            <Info className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
            <p>The contact file works on both iPhone and Android. Profile photo import may depend on your device and contacts app.</p>
          </div>
          <div className="flex items-center gap-1.5 text-white/20 text-xs mt-2">
            <Smartphone className="w-3 h-3" />
            <span>Optimized for mobile</span>
          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
};

export default ArnoCard;
