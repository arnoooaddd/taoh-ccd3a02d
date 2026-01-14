import { motion } from 'framer-motion';
import { Facebook, Phone, MessageCircle, MapPin } from 'lucide-react';
import logoFull from '@/assets/logo-full-white-transparent.png';

export const Footer = () => {
  return (
    <footer className="bg-[hsl(var(--color-darkest))] py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <img 
              src={logoFull} 
              alt="The Alpha Omega Hub" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-muted-foreground max-w-md mb-4">
              The #1 Growth Accelerator for Home Services Companies. 
              Powered by Agendac, our French subsidiary where it all started.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/thealphaomegahub"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="sms:+17273588135?body=TAOH"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/33628545978"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#results" className="text-muted-foreground hover:text-foreground transition-colors">
                  Results
                </a>
              </li>
              <li>
                <a href="#team" className="text-muted-foreground hover:text-foreground transition-colors">
                  Team
                </a>
              </li>
              <li>
                <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                <span>Text TAOH to (727) 358-8135</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>WhatsApp: +33 6 28 54 59 78</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Tampa Bay, FL</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} The Alpha Omega Hub (Adornier LLC). All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Powered by{' '}
            <a 
              href="https://agendac.fr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:underline"
            >
              Agendac
            </a>
            , our French subsidiary
          </p>
        </div>
      </div>
    </footer>
  );
};
