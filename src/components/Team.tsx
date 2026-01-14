import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Linkedin, Twitter } from 'lucide-react';

const team = [
  {
    name: "Arnaud Utille",
    role: "CEO & Founder",
    description: "Visionary leader with proven track record in home services marketing",
    whatsapp: "+33628545978"
  },
  {
    name: "Gabriel",
    role: "Marketing Manager",
    description: "Strategic marketing expert specializing in digital growth for home services"
  },
  {
    name: "Team Member",
    role: "Operations",
    description: "Ensuring smooth delivery and exceptional client experience"
  }
];

export const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section section-dark" ref={ref} id="team">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            A Human-Scale Team
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Proximity and efficiency—we're not a faceless agency, we're your growth partners
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card text-center group hover:bg-white/10 transition-all duration-500"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-white/20 to-white/5 mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl font-bold text-white/50">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{member.role}</p>
              <p className="text-sm text-muted-foreground/80">{member.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a href="#contact" className="btn-hero-primary">
            Meet the Team
          </a>
        </motion.div>
      </div>
    </section>
  );
};
