import { motion } from 'framer-motion';
import { Globe, Camera, BarChart3, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Camera,
    title: "Video Production",
    desc: "High-impact video content for ads, social media, and your website — scripted, filmed, and edited by our team.",
    link: "/services/video-shooting",
  },
  {
    icon: BarChart3,
    title: "Ads Management",
    desc: "A fully managed acquisition engine powered by AI tracking, creative optimization, and continuous performance reviews.",
    link: "/services/ads-management",
  },
  {
    icon: Globe,
    title: "Website Creation",
    desc: "Professional, conversion-focused websites fully optimized for mobile, tablet, and desktop — with built-in local SEO.",
    link: "/services/website-creation",
  },
];

export const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our Services in Tampa Bay
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything your West Central Florida business needs to build an unstoppable digital presence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <Link
                to={service.link}
                className="glass-card group hover:bg-white/10 transition-all duration-500 flex flex-col h-full"
              >
                <service.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-6 flex-grow">{service.desc}</p>
                <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
