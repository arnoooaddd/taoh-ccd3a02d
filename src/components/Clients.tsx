import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

export const Clients = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    // Elfsight script is loaded in Reviews component
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
            They Trust The Alpha Omega Hub
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join the growing family of home services businesses we've helped dominate their markets
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          {/* Elfsight Logo Showcase Widget */}
          <div 
            className="elfsight-app-b1e000b2-31a9-48e4-8175-d63a0e2fdacd" 
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
            Become a Partner
          </a>
        </motion.div>
      </div>
    </section>
  );
};
