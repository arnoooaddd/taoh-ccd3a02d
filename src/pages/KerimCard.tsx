import { motion } from 'framer-motion';
import { Mail, Globe, MessageCircle, Download, Smartphone, Info, Linkedin } from 'lucide-react';
import kerimImg from '@/assets/team/kerim.webp';
import instagramIcon from '@/assets/instagram-icon.png';

const KerimCard = () => {
  const generateVCard = () => {
    const photoUrl = window.location.origin + '/assets/team/kerim.webp';
    const vcard = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'N:Jakupovic;Kerim;;;',
      'FN:Kerim Jakupovic',
      'ORG:The Alpha Omega Hub',
      'TITLE:COO, The Alpha Omega Hub',
      'TEL;TYPE=CELL:+41763424595',
      'EMAIL:kerim@thealphaomegahub.com',
      'URL:https://thealphaomegahub.com/',
      'X-SOCIALPROFILE;TYPE=instagram;x-user=jakokerim:https://instagram.com/jakokerim',
      'X-SOCIALPROFILE;TYPE=linkedin:https://www.linkedin.com/in/kerim-jakupovic/',
      'NOTE:COO at The Alpha Omega Hub — Helping established Tampa Bay businesses build predictable growth through digital marketing.',
      `PHOTO;VALUE=URI:${photoUrl}`,
      'END:VCARD',
    ].join('\r\n');

    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'kerim-jakupovic-contact.vcf';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[hsl(220,25%,6%)] text-white relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[hsl(220,60%,15%)] blur-[150px] opacity-40" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[hsl(250,40%,12%)] blur-[120px] opacity-30" />
      </div>

      <div className="relative z-10 max-w-md mx-auto px-5 py-12 flex flex-col items-center gap-6">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center gap-5 w-full"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-[hsl(42,100%,50%)] blur-2xl opacity-15 scale-110" />
            <img src={kerimImg} alt="Kerim Jakupovic" className="relative w-32 h-32 rounded-full object-cover border-2 border-white/10 shadow-2xl" />
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-display font-bold tracking-tight">Kerim Jakupovic</h1>
            <p className="text-base text-[hsl(42,100%,55%)] font-medium">COO, The Alpha Omega Hub</p>
          </div>
          <p className="text-white/60 text-sm leading-relaxed max-w-xs">
            Helping established Tampa Bay businesses build predictable growth through digital marketing.
          </p>
        </motion.div>

        {/* Save Contact */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="w-full">
          <button onClick={generateVCard} className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-[hsl(42,100%,50%)] text-[hsl(220,25%,8%)] font-semibold text-base hover:bg-[hsl(42,100%,55%)] transition-all duration-300 shadow-lg shadow-[hsl(42,100%,50%)]/20 hover:shadow-[hsl(42,100%,50%)]/30 hover:scale-[1.01] active:scale-[0.99]">
            <Download className="w-5 h-5" />
            Save Contact on My Phone
          </button>
        </motion.div>

        {/* Instagram */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="w-full">
          <a href="https://instagram.com/jakokerim" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 px-5 py-4 rounded-2xl border bg-white/[0.04] border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.15] backdrop-blur-xl transition-all duration-300">
            <img src={instagramIcon} alt="Instagram" className="w-6 h-6 flex-shrink-0 rounded" />
            <div className="flex-1 min-w-0">
              <p className="text-xs text-white/40 uppercase tracking-wider font-medium">Instagram</p>
              <p className="text-sm font-medium text-white/80">@jakokerim</p>
            </div>
            <span className="text-white/20 group-hover:text-white/40 transition-colors text-lg">→</span>
          </a>
        </motion.div>

        {/* WhatsApp — green */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="w-full">
          <a href="https://wa.me/41763424595" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 px-5 py-4 rounded-2xl border bg-[hsl(142,70%,40%)]/10 border-[hsl(142,70%,40%)]/30 hover:bg-[hsl(142,70%,40%)]/20 hover:border-[hsl(142,70%,40%)]/50 backdrop-blur-xl transition-all duration-300">
            <span className="flex-shrink-0 text-[hsl(142,70%,45%)]"><MessageCircle className="w-5 h-5" /></span>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-white/40 uppercase tracking-wider font-medium">WhatsApp</p>
              <p className="text-sm font-medium text-[hsl(142,70%,60%)]">Message on WhatsApp</p>
            </div>
            <span className="text-white/20 group-hover:text-white/40 transition-colors text-lg">→</span>
          </a>
        </motion.div>

        {/* LinkedIn & Email */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }} className="w-full flex flex-col gap-3">
          <a href="https://www.linkedin.com/in/kerim-jakupovic/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 px-5 py-4 rounded-2xl border bg-white/[0.04] border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.15] backdrop-blur-xl transition-all duration-300">
            <span className="flex-shrink-0 text-[hsl(210,80%,55%)]"><Linkedin className="w-5 h-5" /></span>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-white/40 uppercase tracking-wider font-medium">LinkedIn</p>
              <p className="text-sm font-medium text-white/80">Kerim Jakupovic</p>
            </div>
            <span className="text-white/20 group-hover:text-white/40 transition-colors text-lg">→</span>
          </a>
          <a href="mailto:kerim@thealphaomegahub.com" className="group flex items-center gap-4 px-5 py-4 rounded-2xl border bg-white/[0.04] border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.15] backdrop-blur-xl transition-all duration-300">
            <span className="flex-shrink-0 text-white/50 group-hover:text-white/80 transition-colors"><Mail className="w-5 h-5" /></span>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-white/40 uppercase tracking-wider font-medium">Email</p>
              <p className="text-sm font-medium text-white/80">kerim@thealphaomegahub.com</p>
            </div>
            <span className="text-white/20 group-hover:text-white/40 transition-colors text-lg">→</span>
          </a>
        </motion.div>

        {/* Quick Actions */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }} className="w-full">
          <p className="text-xs text-white/30 uppercase tracking-widest text-center mb-3 font-medium">Quick Actions</p>
          <div className="flex gap-3 justify-center">
            <a href="https://thealphaomegahub.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white/60 text-xs font-medium hover:bg-white/[0.08] hover:text-white/80 transition-all duration-300">
              <Globe className="w-4 h-4" /> Website
            </a>
            <a href="https://instagram.com/jakokerim" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white/60 text-xs font-medium hover:bg-white/[0.08] hover:text-white/80 transition-all duration-300">
              <img src={instagramIcon} alt="" className="w-4 h-4 rounded-sm" /> Instagram
            </a>
            <a href="https://wa.me/41763424595" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white/60 text-xs font-medium hover:bg-white/[0.08] hover:text-white/80 transition-all duration-300">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </motion.div>

        {/* Trust */}
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
  );
};

export default KerimCard;
