import { ServicePageLayout } from '@/components/ServicePageLayout';
import { motion } from 'framer-motion';
import { Globe, Search, Phone, BarChart3, Share2, Languages, CheckCircle, Monitor, Smartphone, Tablet, ArrowDown, DollarSign, Clock } from 'lucide-react';

const sections = [
  {
    icon: Globe,
    emoji: "🌐",
    title: "Professional & High-Performance Website",
    items: [
      "100% optimized for mobile, tablet, and desktop",
      "Modern, clean, conversion-focused design",
      "Turnkey delivery after validation of a specifications document",
      "Content, structure, and objectives defined before launch",
    ]
  },
  {
    icon: Search,
    emoji: "📍",
    title: "Local SEO",
    items: [
      "Local SEO optimization from the design phase",
      "Up to 15 pages (1 per service or targeted cities/areas)",
      "SEO structure designed for Google (services, FAQ, reviews, local)",
      "Google Business Profile reviews displayed on the website",
    ]
  },
  {
    icon: Phone,
    emoji: "📞",
    title: "Easy Contact & Conversion Optimized",
    items: [
      "Phone number visible everywhere",
      "Floating WhatsApp button (instant contact)",
      "Typeform form connected to CRM",
      "Dedicated contact page",
    ]
  },
  {
    icon: BarChart3,
    emoji: "📊",
    title: "Tracking & Performance",
    items: [
      "Tracking connected to Meta Ads and Google Ads",
      "Google Analytics: traffic & performance monitoring",
    ]
  },
  {
    icon: Share2,
    emoji: "📲",
    title: "Social Media & Content",
    items: [
      "Social media integrated in real time on the website",
      "YouTube videos & interviews displayed automatically",
      "Content updated without manual intervention",
    ]
  },
  {
    icon: Languages,
    emoji: "🌍",
    title: "Languages",
    items: [
      "Website available in English and Spanish",
    ]
  },
];

const WebsiteCreation = () => {
  return (
    <ServicePageLayout>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-[hsl(var(--color-darker))]" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-sm uppercase tracking-widest text-primary font-semibold mb-4">
                🌐 Website Creation Service
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Building Your Website
                <br />
                <span className="text-gradient">From Alpha to Omega</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
                A fully optimized, conversion-focused website built to dominate local search and turn visitors into customers.
              </p>
              <div className="flex items-center justify-center gap-6 mb-8">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Monitor className="w-5 h-5" /> <span className="text-sm">Desktop</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Tablet className="w-5 h-5" /> <span className="text-sm">Tablet</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Smartphone className="w-5 h-5" /> <span className="text-sm">Mobile</span>
                </div>
              </div>
              <a href="#contact" className="btn-hero-primary inline-flex items-center gap-2 min-w-[200px] px-8">
                Get Started <ArrowDown className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Everything You Need
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive website package designed for established businesses
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {sections.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass-card group hover:bg-white/10 transition-all duration-500"
              >
                <div className="text-2xl mb-3">{section.emoji}</div>
                <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="section section-dark">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Websites We've Built
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real examples of high-performance websites delivered to our partners
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { name: "MyWebGlory", url: "https://mywebglory.com/", img: "https://api.microlink.io/?url=https://mywebglory.com&screenshot=true&meta=false&embed=screenshot.url" },
              { name: "Train With Kickoff", url: "https://www.trainwithkickoff.com/", img: "https://api.microlink.io/?url=https://www.trainwithkickoff.com&screenshot=true&meta=false&embed=screenshot.url" },
              { name: "Vanta", url: "https://www.vanta.com/", img: "https://api.microlink.io/?url=https://www.vanta.com&screenshot=true&meta=false&embed=screenshot.url" },
            ].map((site, i) => (
              <motion.a
                key={site.name}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="glass-card group hover:bg-white/10 transition-all duration-500 overflow-hidden p-0"
              >
                <div className="aspect-video bg-muted/20 overflow-hidden">
                  <img
                    src={site.img}
                    alt={`${site.name} website screenshot`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold">{site.name}</h3>
                  <p className="text-sm text-primary mt-1 group-hover:underline">Visit website →</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section section-dark">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Pricing & Terms
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card text-center"
            >
              <DollarSign className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-3xl font-bold text-primary mb-1">$6,000</p>
              <p className="text-sm text-muted-foreground">Starting price</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card text-center"
            >
              <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-3xl font-bold text-foreground mb-1">7–14 days</p>
              <p className="text-sm text-muted-foreground">Delivery time</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card text-center"
            >
              <Globe className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-3xl font-bold text-foreground mb-1">~$25/mo</p>
              <p className="text-sm text-muted-foreground">Hosting (paid by client)</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card text-center"
            >
              <BarChart3 className="w-8 h-8 text-primary mx-auto mb-3" />
              <div>
                <p className="text-lg font-bold text-foreground">Modifications</p>
                <p className="text-sm text-muted-foreground mt-1">Year 1: $39/hour</p>
                <p className="text-sm text-muted-foreground">After Year 1: $59/hour</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <a href="#contact" className="btn-hero-primary min-w-[200px] px-8">
              Become a Partner
            </a>
          </motion.div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default WebsiteCreation;
