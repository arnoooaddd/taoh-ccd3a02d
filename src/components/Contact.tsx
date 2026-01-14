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
                Adornier LLC, St Petersburg, FL
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
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold">WhatsApp Arnaud (CEO)</p>
                  <p className="text-sm text-muted-foreground">+33 6 28 54 59 78</p>
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
                  <p className="text-sm text-muted-foreground">St Petersburg, FL</p>
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
            className="glass-card min-h-[600px]"
          >
            <div 
              data-tf-live="01KEZ1CB4G0RYGXG6CMFQ1846W"
              className="h-full min-h-[550px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
