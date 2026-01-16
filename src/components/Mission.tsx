import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Shield, Crown, TrendingUp } from 'lucide-react';

const missionItems = [
  {
    number: "01",
    icon: Crown,
    title: "Stand Out From Competition",
    description: "Differentiate by your brand, not your price. People want either the cheapest or the best—be the best."
  },
  {
    number: "02",
    icon: Shield,
    title: "Build a Trustworthy Image",
    description: "Project a serious, cohesive image of your company everywhere online. No gimmicks, just credibility."
  },
  {
    number: "03",
    icon: Target,
    title: "Position as the Trusted Partner",
    description: "Stand as the reliable choice against scams—no flashy promises of unrealistic savings."
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Escape the Shadow of Price Wars",
    description: "Stop competing with big players who undercut on price. Win on value and reputation."
  }
];

export const Mission = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section" ref={ref} id="services">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            The Alpha Omega Hub's Mission
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            A growth accelerator, focused on building long-term brand value for home services businesses.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {missionItems.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card group hover:bg-white/10 transition-all duration-500"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <span className="text-4xl font-bold text-white/10 group-hover:text-white/20 transition-colors">
                    {item.number}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <item.icon className="w-6 h-6 text-foreground" />
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a href="#contact" className="btn-hero-primary">
            Start Your Transformation
          </a>
        </motion.div>
      </div>
    </section>
  );
};
