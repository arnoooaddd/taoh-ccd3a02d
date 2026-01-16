import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { Phone, MessageCircle, MapPin, Facebook, Calendar } from 'lucide-react';
import logoFull from '@/assets/logo-full-white-transparent.png';

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    // Load Typeform script
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="section section-dark" ref={ref} id="contact">
      <div className="container mx-auto">
        {/* Mobile Layout */}
        <div className="lg:hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold mb-4">
              Get In Touch
            </h2>
            <p className="text-muted-foreground text-lg">
              Ready to transform your home services business? Let's talk.
            </p>
          </motion.div>
          
          {/* Typeform - Full width on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card !p-2 sm:!p-4 mb-6"
          >
            <div 
              data-tf-live="01KEZ1CB4G0RYGXG6CMFQ1846W"
              style={{ width: '100%', height: 'auto', minHeight: '500px' }}
            />
          </motion.div>
          
          {/* Contact Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-3 mb-6"
          >
            <a 
              href="sms:+17273588135?body=TAOH"
              className="glass-card flex items-center gap-4 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold">Text TAOH</p>
                <p className="text-sm text-muted-foreground">(727) 358-8135</p>
              </div>
            </a>
            
            <a 
              href="https://wa.me/33628545978"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card flex items-center gap-4 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-green-400">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <p className="font-semibold">WhatsApp Arnaud (CEO)</p>
                <p className="text-sm text-muted-foreground">Chat with us</p>
              </div>
            </a>
          </motion.div>
          
          {/* Facebook Icon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center mb-6"
          >
            <a
              href="https://www.facebook.com/thealphaomegahub"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <Facebook className="w-6 h-6" />
            </a>
          </motion.div>
          
          {/* Book a Call Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-8"
          >
            <a 
              href="https://api.leadconnectorhq.com/widget/booking/zgLpBu3IRRYCa1Dyesec"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero-primary w-full flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Book a Call
            </a>
          </motion.div>
          
          {/* Logo and Description - Bottom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center border-t border-border pt-8"
          >
            <img 
              src={logoFull} 
              alt="The Alpha Omega Hub" 
              className="h-12 w-auto mx-auto mb-4"
            />
            <p className="text-sm text-muted-foreground mb-2">
              The Alpha Omega Hub is your growth accelerator for home services businesses.
              Based in Tampa Bay, Florida.
            </p>
            <p className="text-xs text-muted-foreground">
              Adornier LLC • FL 33716 St Petersburg, Florida
            </p>
          </motion.div>
        </div>
        
        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Get In Touch
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ready to transform your home services business? Let's talk.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <img 
                  src={logoFull} 
                  alt="The Alpha Omega Hub" 
                  className="h-16 w-auto mb-6"
                />
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The Alpha Omega Hub is your growth accelerator for home services businesses.
                  Based in Tampa Bay, Florida, we help HVAC, solar, roofing, and home improvement 
                  companies build unstoppable digital presence.
                </p>
                <p className="text-sm text-muted-foreground">
                  Adornier LLC • FL 33716 St Petersburg, Florida
                </p>
              </div>
              
              <div className="space-y-4">
                <a 
                  href="sms:+17273588135?body=TAOH"
                  className="glass-card flex items-center gap-4 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Text TAOH</p>
                    <p className="text-sm text-muted-foreground">(727) 358-8135</p>
                  </div>
                </a>
                
                <a 
                  href="https://wa.me/33628545978"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card flex items-center gap-4 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-green-400">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">WhatsApp Arnaud (CEO)</p>
                    <p className="text-sm text-muted-foreground">Chat with us</p>
                  </div>
                </a>
                
                <a 
                  href="https://www.facebook.com/thealphaomegahub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card flex items-center gap-4 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Facebook className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Follow on Facebook</p>
                    <p className="text-sm text-muted-foreground">@thealphaomegahub</p>
                  </div>
                </a>
                
                <div className="glass-card flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Tampa Bay, Florida</p>
                    <p className="text-sm text-muted-foreground">FL 33716 St Petersburg</p>
                  </div>
                </div>
              </div>
              
              <a 
                href="https://api.leadconnectorhq.com/widget/booking/zgLpBu3IRRYCa1Dyesec"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero-primary w-full flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Book a Call
              </a>
            </motion.div>
            
            {/* Typeform */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass-card"
            >
              <div 
                data-tf-live="01KEZ1CB4G0RYGXG6CMFQ1846W"
                style={{ width: '100%', height: 'auto', minHeight: '550px' }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
