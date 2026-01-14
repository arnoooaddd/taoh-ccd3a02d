import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Facebook, Phone, MessageCircle } from 'lucide-react';
import logoFull from '@/assets/logo-full-white-transparent.png';

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Results', href: '#results' },
  { name: 'Team', href: '#team' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-background/95 backdrop-blur-xl shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img 
              src={logoFull} 
              alt="The Alpha Omega Hub" 
              className="h-10 md:h-12 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground/80 hover:text-foreground link-underline font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA & Socials */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://www.facebook.com/thealphaomegahub"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-foreground/70 hover:text-foreground transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="btn-hero-primary text-sm py-2.5 px-5"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/98 backdrop-blur-xl border-t border-border"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg text-foreground/80 hover:text-foreground py-2"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <a
                  href="https://www.facebook.com/thealphaomegahub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-foreground/70 hover:text-foreground"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="sms:+17273588135?body=TAOH"
                  className="p-2 text-foreground/70 hover:text-foreground"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-hero-primary text-center mt-2"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
