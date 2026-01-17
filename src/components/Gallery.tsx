import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

export const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    // Elfsight script is loaded in Reviews component
  }, []);

  return (
    <section className="section" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Meet Our Partners
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Moments from our in-person client meetings and video shoots
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          {/* Elfsight Photo Gallery Widget - TAOH clients */}
          <div 
            className="elfsight-app-71fe0748-62ad-4959-822a-e609d5bb3a38" 
            data-elfsight-app-lazy
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">Your turn next!</p>
          <a href="#contact" className="btn-hero-primary whitespace-normal text-center">
            <span className="hidden sm:inline">Become a Partner</span>
            <span className="sm:hidden">Become a<br />Partner</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
