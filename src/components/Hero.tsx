import { motion } from 'framer-motion';
import { ArrowDown, Play, Calendar } from 'lucide-react';
import { FloatingLogos } from './FloatingLogos';
import heroBg from '@/assets/hero-bg.jpg';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/85 to-background" />
      
      {/* Floating Logos */}
      <FloatingLogos />
      
      {/* Floating appointment badges */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="hidden lg:flex absolute left-8 top-1/4 glass-card flex-col gap-2 text-sm"
      >
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-green-400" />
          <span className="text-muted-foreground">New Appointment</span>
        </div>
        <span className="font-semibold">HVAC Install - $12,000</span>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="hidden lg:flex absolute right-8 top-1/3 glass-card flex-col gap-2 text-sm"
      >
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-green-400" />
          <span className="text-muted-foreground">New Appointment</span>
        </div>
        <span className="font-semibold">Solar Consult - $8,500</span>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="hidden lg:flex absolute left-16 bottom-1/4 glass-card flex-col gap-2 text-sm"
      >
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-green-400" />
          <span className="text-muted-foreground">New Appointment</span>
        </div>
        <span className="font-semibold">Roofing Est - $15,000</span>
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              The #1 Growth Accelerator for{' '}
              <span className="text-gradient">Home Services</span>{' '}
              Companies
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Stop burning cash on shared leads. We help home services businesses 
              doing $2M+ build unstoppable digital presence and predictable growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contact" className="btn-hero-primary inline-flex items-center justify-center gap-2">
                Get Started
                <ArrowDown className="w-5 h-5" />
              </a>
              <a href="#vsl" className="btn-hero-secondary inline-flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                Watch How It Works
              </a>
            </div>
            
            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-border">
              <div>
                <p className="text-2xl md:text-3xl font-bold">$8M+</p>
                <p className="text-sm text-muted-foreground">Generated Revenue</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold">&gt;400%</p>
                <p className="text-sm text-muted-foreground">Avg. ROI</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold">3+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </motion.div>
          
          {/* Right side - Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            id="vsl"
            className="relative"
          >
            <div className="video-container aspect-[9/16] max-w-sm mx-auto glow">
              <iframe
                src="https://www.loom.com/embed/12cf52395f814aa5887f6d9da02dd30c"
                frameBorder="0"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};
