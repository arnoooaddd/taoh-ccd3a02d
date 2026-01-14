import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { DollarSign, TrendingUp, Target, Zap } from 'lucide-react';

const stats = [
  {
    icon: DollarSign,
    value: "$8M+",
    label: "Revenue Generated",
    description: "For our partners in the last 3 years through our French subsidiary Agendac"
  },
  {
    icon: TrendingUp,
    value: ">400%",
    label: "Average ROI",
    description: "Gross margin return on investment for our partners"
  },
  {
    icon: Target,
    value: "$570K+",
    label: "Ad Spend Managed",
    description: "Exclusively in home renovation and services advertising"
  },
  {
    icon: Zap,
    value: "30",
    label: "Days to First Results",
    description: "With our pay-per-appointment system"
  }
];

export const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section section-dark" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
            Powered by Agendac, our French subsidiary
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Proven Results, Real Numbers
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="stat-card"
            >
              <stat.icon className="w-10 h-10 mx-auto mb-4 text-foreground" />
              <p className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</p>
              <p className="text-lg font-semibold mb-2">{stat.label}</p>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
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
            Get These Results
          </a>
        </motion.div>
      </div>
    </section>
  );
};
