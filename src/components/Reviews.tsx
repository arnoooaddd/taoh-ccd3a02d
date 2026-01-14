import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

export const Reviews = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Elfsight script
    const script = document.createElement('script');
    script.src = 'https://elfsightcdn.com/platform.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="section section-dark" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What Our Partners Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real reviews from real home services business owners we've helped grow
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto"
          ref={containerRef}
        >
          {/* Elfsight Reviews Widget */}
          <div 
            className="elfsight-app-6ed2862a-6a58-46df-8794-f87f430bcf80" 
            data-elfsight-app-lazy
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a href="#contact" className="btn-hero-primary">
            Join Our Partners
          </a>
        </motion.div>
      </div>
    </section>
  );
};
