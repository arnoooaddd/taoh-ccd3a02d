import { motion } from 'framer-motion';
import { Mail, Phone, Globe, MessageCircle, Download, Smartphone, Info } from 'lucide-react';
import arnaudImg from '@/assets/team/arnaud.webp';

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
      'X-SOCIALPROFILE;TYPE=instagram:https://instagram.com/arno.adornier',
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

  const contactCards = [
    {
      label: 'Instagram',
      value: '@arno.adornier',
      href: 'https://instagram.com/arno.adornier',
      icon: <Globe className="w-5 h-5" />,
      highlight: false,
    },
    {
      label: 'Website',
      value: 'thealphaomegahub.com',
      href: 'https://thealphaomegahub.com/',
      icon: <Globe className="w-5 h-5" />,
      highlight: false,
    },
    {
      label: 'Phone',
      value: '+1 727 358 8135',
      href: 'tel:+17273588135',
      icon: <Phone className="w-5 h-5" />,
      highlight: false,
    },
    {
      label: 'WhatsApp',
      value: 'Message on WhatsApp',
      href: 'https://wa.me/33628545978',
      icon: <MessageCircle className="w-5 h-5" />,
      highlight: true,
    },
  ];

  const quickActions = [
    { label: 'Website', href: 'https://thealphaomegahub.com/', icon: <Globe className="w-4 h-4" /> },
    { label: 'Instagram', href: 'https://instagram.com/arno.adornier', icon: <Globe className="w-4 h-4" /> },
    { label: 'WhatsApp', href: 'https://wa.me/33628545978', icon: <MessageCircle className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-[hsl(220,25%,6%)] text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[hsl(220,60%,15%)] blur-[150px] opacity-40" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[hsl(250,40%,12%)] blur-[120px] opacity-30" />
      </div>

      <div className="relative z-10 max-w-md mx-auto px-5 py-12 flex flex-col items-center gap-8">
        {/* Hero / Card Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center gap-5 w-full"
        >
          {/* Profile Image */}
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-[hsl(42,100%,50%)] blur-2xl opacity-15 scale-110" />
            <img
              src={arnaudImg}
              alt="Arno Adornier"
              className="relative w-32 h-32 rounded-full object-cover border-2 border-white/10 shadow-2xl"
            />
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

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="w-full flex flex-col gap-3"
        >
          {contactCards.map((card) => (
            <a
              key={card.label}
              href={card.href}
              target={card.href.startsWith('tel:') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className={`group flex items-center gap-4 px-5 py-4 rounded-2xl border transition-all duration-300 ${
                card.highlight
                  ? 'bg-[hsl(42,100%,50%)]/10 border-[hsl(42,100%,50%)]/30 hover:bg-[hsl(42,100%,50%)]/20 hover:border-[hsl(42,100%,50%)]/50'
                  : 'bg-white/[0.04] border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.15]'
              } backdrop-blur-xl`}
            >
              <span className={`flex-shrink-0 ${card.highlight ? 'text-[hsl(42,100%,55%)]' : 'text-white/50 group-hover:text-white/80'} transition-colors`}>
                {card.icon}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-white/40 uppercase tracking-wider font-medium">{card.label}</p>
                <p className={`text-sm font-medium truncate ${card.highlight ? 'text-[hsl(42,100%,70%)]' : 'text-white/80'}`}>{card.value}</p>
              </div>
              <span className="text-white/20 group-hover:text-white/40 transition-colors text-lg">→</span>
            </a>
          ))}
        </motion.div>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full flex flex-col gap-3"
        >
          <button
            onClick={generateVCard}
            className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-[hsl(42,100%,50%)] text-[hsl(220,25%,8%)] font-semibold text-base hover:bg-[hsl(42,100%,55%)] transition-all duration-300 shadow-lg shadow-[hsl(42,100%,50%)]/20 hover:shadow-[hsl(42,100%,50%)]/30 hover:scale-[1.01] active:scale-[0.99]"
          >
            <Download className="w-5 h-5" />
            Save Contact on My Phone
          </button>

          <a
            href="mailto:arno@thealphaomegahub.com"
            className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/[0.06] border border-white/[0.1] text-white/70 text-sm font-medium hover:bg-white/[0.1] hover:text-white/90 transition-all duration-300 backdrop-blur-xl"
          >
            <Mail className="w-4 h-4" />
            arno@thealphaomegahub.com
          </a>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full"
        >
          <p className="text-xs text-white/30 uppercase tracking-widest text-center mb-3 font-medium">Quick Actions</p>
          <div className="flex gap-3 justify-center">
            {quickActions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white/60 text-xs font-medium hover:bg-white/[0.08] hover:text-white/80 transition-all duration-300"
              >
                {action.icon}
                {action.label}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Trust / Info Block */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="w-full flex flex-col items-center gap-2 pt-4"
        >
          <div className="flex items-start gap-2 text-white/25 text-xs leading-relaxed text-center max-w-xs">
            <Info className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
            <p>
              The contact file works on both iPhone and Android. Profile photo import may depend on your device and contacts app.
            </p>
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

export default ArnoCard;
