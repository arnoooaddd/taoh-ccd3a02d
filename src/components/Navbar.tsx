import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Facebook, MessageCircle, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logoFull from '@/assets/logo-full-white-transparent.png';

const serviceLinks = [
  { name: 'Video Production', href: '/services/video-shooting' },
  { name: 'Ads Management', href: '/services/ads-management' },
  { name: 'Website Creation', href: '/services/website-creation' },
];

const navLinks = [
  { name: 'Results', href: '/results' },
  { name: 'Team', href: '/#team' },
  { name: 'Blog', href: '/blog' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {};
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
    if (href.startsWith('/#')) {
      if (location.pathname === '/') {
        const el = document.querySelector(href.replace('/', ''));
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
      // If on another page, Link will navigate to / and hash will handle scroll
    }
  };

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
          <Link to="/" className="flex items-center">
            <img src={logoFull} alt="The Alpha Omega Hub" className="h-10 md:h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Services Dropdown */}
            <div className="relative" ref={servicesRef}>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="text-foreground/80 hover:text-foreground link-underline font-medium transition-colors flex items-center gap-1"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-background/95 backdrop-blur-xl border border-border rounded-xl shadow-2xl overflow-hidden"
                  >
                    {serviceLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        onClick={() => setIsServicesOpen(false)}
                        className="block px-5 py-3 text-sm text-foreground/80 hover:text-foreground hover:bg-white/10 transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-foreground/80 hover:text-foreground link-underline font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA & Socials */}
          <div className="hidden lg:flex items-center gap-4">
            <div
              className="elfsight-app-8ec03314-2832-4037-a0a6-d3b3064a482c"
              data-elfsight-app-lazy
              style={{ width: '90px', height: '40px' }}
            />
            <a
              href="https://www.facebook.com/thealphaomegahub"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-foreground/70 hover:text-foreground transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <Link to="/#contact" className="btn-hero-primary text-sm py-2.5 px-5">
              Get Started
            </Link>
          </div>

          {/* Mobile */}
          <div className="lg:hidden flex items-center gap-2">
            <div
              className="elfsight-app-8ec03314-2832-4037-a0a6-d3b3064a482c"
              data-elfsight-app-lazy
              style={{ width: '80px', height: '36px' }}
            />
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-foreground">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background backdrop-blur-xl border-t border-border"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {/* Services Accordion */}
              <div>
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="text-lg text-foreground/80 hover:text-foreground py-2 flex items-center gap-2 w-full"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isMobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 flex flex-col gap-2 overflow-hidden"
                    >
                      {serviceLinks.map((link) => (
                        <Link
                          key={link.name}
                          to={link.href}
                          onClick={() => { setIsMobileMenuOpen(false); setIsMobileServicesOpen(false); }}
                          className="text-base text-foreground/70 hover:text-foreground py-1"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-lg text-foreground/80 hover:text-foreground py-2"
                >
                  {link.name}
                </Link>
              ))}

              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <a href="https://www.facebook.com/thealphaomegahub" target="_blank" rel="noopener noreferrer" className="p-2 text-foreground/70 hover:text-foreground">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="sms:+17273588135?body=TAOH" className="p-2 text-foreground/70 hover:text-foreground">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
              <Link to="/#contact" onClick={() => setIsMobileMenuOpen(false)} className="btn-hero-primary text-center mt-2">
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
