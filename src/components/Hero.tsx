import { motion } from 'framer-motion';
import { ArrowDown, Play, Calendar, Star, Clock, CheckCircle } from 'lucide-react';
import { FloatingLogos } from './FloatingLogos';
import heroBg from '@/assets/hero-bg.jpg';

// Desktop floating widgets - positioned around edges, away from center content
const floatingAppointments = [
  { title: "HVAC Install", value: "$12,000", delay: 1.2, position: "left-[3%] top-[12%]", opacity: "opacity-60" },
  { title: "Solar Consult", value: "$8,500", delay: 1.5, position: "left-[5%] bottom-[20%]", opacity: "opacity-50" },
  { title: "Roofing Est", value: "$15,000", delay: 1.8, position: "right-[3%] bottom-[15%]", opacity: "opacity-70" },
  { title: "Pool Install", value: "$22,000", delay: 2.1, position: "right-[5%] bottom-[40%]", opacity: "opacity-60" },
];

const floatingCalendars = [
  { date: "Jan 15", time: "10:00 AM", delay: 2.4, position: "left-[2%] top-[35%]", opacity: "opacity-50" },
  { date: "Jan 16", time: "2:30 PM", delay: 2.7, position: "right-[2%] top-[10%]", opacity: "opacity-60" },
  { date: "Jan 17", time: "11:00 AM", delay: 3.0, position: "left-[4%] bottom-[35%]", opacity: "opacity-40" },
];

// Mobile floating calendars (fewer, positioned away from content)
const mobileFloatingCalendars = [
  { date: "Jan 16", time: "2:30 PM", delay: 2.0, position: "right-[5%] top-[8%]" },
];

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
      
      {/* Desktop Floating Calendar Events */}
      {floatingCalendars.map((cal, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: cal.delay, duration: 0.8 }}
          className={`hidden lg:flex absolute ${cal.position} ${cal.opacity} glass-card flex-col gap-1 text-xs animate-calendar-float z-0`}
          style={{ animationDelay: `${index * 0.5}s` }}
        >
          <div className="flex items-center gap-2">
            <Clock className="w-3 h-3 text-primary" />
            <span className="text-muted-foreground">{cal.date}</span>
          </div>
          <span className="font-medium text-foreground/80">{cal.time}</span>
        </motion.div>
      ))}
      
      {/* Mobile Floating Calendar Events */}
      {mobileFloatingCalendars.map((cal, index) => (
        <motion.div
          key={`mobile-${index}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: cal.delay, duration: 0.8 }}
          className={`lg:hidden flex absolute ${cal.position} glass-card flex-col gap-1 text-xs animate-calendar-float z-0`}
          style={{ animationDelay: `${index * 0.5}s` }}
        >
          <div className="flex items-center gap-2">
            <Clock className="w-3 h-3 text-primary" />
            <span className="text-muted-foreground">{cal.date}</span>
          </div>
          <span className="font-medium text-foreground/80">{cal.time}</span>
        </motion.div>
      ))}
      
      {/* Floating appointment badges - Desktop only, positioned around edges */}
      {floatingAppointments.map((apt, index) => (
        <motion.div
          key={apt.title}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: apt.delay, duration: 0.8 }}
          className={`hidden lg:flex absolute ${apt.position} ${apt.opacity} glass-card flex-col gap-2 text-sm animate-calendar-float z-0`}
          style={{ animationDelay: `${index * 0.3}s` }}
        >
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-green-400" />
            <span className="text-muted-foreground">New Appointment</span>
          </div>
          <span className="font-semibold">{apt.title} - {apt.value}</span>
        </motion.div>
      ))}

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Social Proof Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center gap-3 glass-card !px-4 !py-2 mb-6"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                Trusted by <span className="text-foreground font-semibold">30+</span> businesses
              </span>
              <CheckCircle className="w-4 h-4 text-green-400" />
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              The #1 Growth Accelerator for{' '}
              <span className="text-gradient">Home Services</span>{' '}
              Companies
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              We help home services businesses doing $2M+ build unstoppable digital presence and predictable growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contact" className="btn-hero-primary inline-flex items-center justify-center gap-2 whitespace-normal text-center">
                <span className="hidden sm:inline">Become a Partner</span>
                <span className="sm:hidden">Become a<br />Partner</span>
                <ArrowDown className="w-5 h-5" />
              </a>
              {/* Mobile only - Watch How It Works */}
              <a href="#vsl" className="lg:hidden btn-hero-secondary inline-flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                Watch How It Works
              </a>
            </div>
            
            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-border">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">$8M+</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Generated Revenue</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">&gt;400%</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Avg. ROI</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">3+</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </motion.div>
          
          {/* Right side - Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            id="vsl"
            className="relative flex items-center justify-center"
          >
            <div className="video-container aspect-[9/16] w-full max-w-[280px] sm:max-w-[300px] md:max-w-[320px] mx-auto glow">
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
