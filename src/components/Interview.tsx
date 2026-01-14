import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const Interview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section" ref={ref} id="results">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Partner Interview
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hear directly from our partners about their experience and results
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          {/* Desktop Video - 16:9 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="video-container aspect-video">
              <iframe
                src="https://www.loom.com/embed/9fe0a97f692f407398a760573fee616c"
                frameBorder="0"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4">
              Desktop View (16:9)
            </p>
          </motion.div>
          
          {/* Mobile Video - 9:16 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="video-container aspect-[9/16] max-w-xs mx-auto">
              <iframe
                src="https://www.loom.com/embed/78b8ae05942e4a19a69c0b1dcc47aab3"
                frameBorder="0"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4">
              Mobile Optimized (9:16)
            </p>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a href="#contact" className="btn-hero-primary">
            Get Similar Results
          </a>
        </motion.div>
      </div>
    </section>
  );
};
