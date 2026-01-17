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
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Desktop/Tablet Video - 16:9 - Hidden on mobile */}
          <div className="hidden md:block">
            <div className="video-container aspect-video">
              <iframe
                src="https://www.loom.com/embed/921561ff962742f3ac3fffded373cf32"
                frameBorder="0"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
          
          {/* Mobile Video - 9:16 - Hidden on tablet/desktop */}
          <div className="block md:hidden">
            <div className="video-container aspect-[9/16] max-w-xs mx-auto">
              <iframe
                src="https://www.loom.com/embed/78b8ae05942e4a19a69c0b1dcc47aab3"
                frameBorder="0"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </motion.div>
        
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