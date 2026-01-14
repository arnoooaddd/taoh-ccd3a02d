import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const teamLeaders = [
  {
    name: "Arnaud UTILLE",
    role: "Chief Executive Officer",
    description: "Client Relationship & Customer Success Management",
    highlight: "Bachelor, majoring in physics • 9+ years in marketing",
    whatsapp: "+33628545978"
  },
  {
    name: "Kerim JAKUPOVIC",
    role: "Chief Operating Officer",
    description: "Project Management & Technical Implementation",
    highlight: "Master's in Marketing • 4+ years in content creation"
  }
];

const teamMembers = [
  {
    name: "Gabriel Gonzales",
    role: "Brand Ambassador",
    description: "Trusted figure with years of on-camera experience",
    highlight: "5+ years experience in Brand development"
  },
  {
    name: "Omar TROUSSI",
    role: "Advertising Manager",
    description: "Advertising Campaigns Management",
    highlight: "4+ years of advertising campaigns management"
  },
  {
    name: "Andrei ADAVANII",
    role: "Video Editing Manager",
    description: "Content Assembly and Post-Production",
    highlight: "6+ years of video editing experience"
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
            The Team
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Proximity and efficiency—we're not a faceless agency, we're your growth partners
          </p>
        </motion.div>
        
        {/* Leadership Team */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
          {teamLeaders.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card text-center group hover:bg-white/10 transition-all duration-500"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 mx-auto mb-4 flex items-center justify-center border-2 border-primary/30">
                <span className="text-2xl font-bold text-primary">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-sm text-primary mb-2">({member.role})</p>
              <p className="text-sm text-muted-foreground mb-3">{member.description}</p>
              <p className="text-xs font-semibold text-primary">{member.highlight}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Team Members */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: (index + 2) * 0.1 }}
              className="glass-card text-center group hover:bg-white/10 transition-all duration-500"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 mx-auto mb-4 flex items-center justify-center border-2 border-primary/20">
                <span className="text-xl font-bold text-primary/80">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
              <p className="text-sm text-primary/80 mb-2">({member.role})</p>
              <p className="text-xs text-muted-foreground mb-2">{member.description}</p>
              <p className="text-xs font-semibold text-primary/80">{member.highlight}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
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