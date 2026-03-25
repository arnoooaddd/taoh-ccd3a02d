import { ServicePageLayout } from '@/components/ServicePageLayout';
import { motion } from 'framer-motion';
import { Camera, CheckCircle, Film, Clapperboard, Users, Sparkles, RefreshCw, ArrowDown } from 'lucide-react';

const features = [
  { icon: Clapperboard, title: "Complete Scriptwriting", desc: "We shape your message with a professional script tailored to your brand and audience." },
  { icon: Users, title: "Full Planning & On-Site Coordination", desc: "Every detail of the shooting day is planned and coordinated for maximum efficiency." },
  { icon: Camera, title: "On-Location Filming", desc: "We film at your location, including 1–2 client interviews to build trust and credibility." },
  { icon: Film, title: "Business Owner Presentation", desc: "A polished presentation video of the business owner, optimized for ads." },
  { icon: Sparkles, title: "Additional Team & Workspace Footage", desc: "Extra shots of your team, workspace, and environment to humanize your brand." },
  { icon: RefreshCw, title: "Professional Editing & Unlimited Revisions", desc: "Branded graphics, ad-ready formats, and unlimited revisions until perfection." },
];

const VideoShooting = () => {
  useEffect(() => {
    document.title = "Video Production Tampa Bay | Professional Business Videos | The Alpha Omega Hub";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Professional video production services in Tampa Bay & West Central Florida. High-impact business videos for ads, social media & websites. Scripted, filmed & edited by our team.');
    return () => { document.title = "The Alpha Omega Hub | Tampa Bay's #1 Growth Accelerator"; };
  }, []);

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
                🎬 Video Production Service
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Taking Your Brand
                <br />
                <span className="text-gradient">From Alpha to Omega</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Authentic, high-impact videos designed for websites, social media, and ad campaigns — built to boost visibility and attract new clients.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#contact" className="btn-hero-primary inline-flex items-center gap-2 min-w-[200px] px-8">
                  Get Started <ArrowDown className="w-5 h-5" />
                </a>
                <a href="#work" className="inline-flex items-center gap-2 min-w-[200px] px-8 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary/10 transition-colors justify-center">
                  View Our Work
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Included */}
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
              What's Included
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We handle the entire video production from start to finish
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass-card group hover:bg-white/10 transition-all duration-500"
              >
                <f.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Work */}
      <section className="section section-dark" id="work">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              See Our Work in Action
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ad produced for Community Bible Baptist Church
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <p className="text-sm uppercase tracking-wider text-primary font-semibold mb-4">Top of Funnel — Client Interview</p>
              <div className="relative aspect-[9/16] max-w-xs mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <iframe
                  src="https://www.youtube.com/embed/HJtxQX0ekZ4"
                  frameBorder="0"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <p className="text-sm uppercase tracking-wider text-primary font-semibold mb-4">Bottom of Funnel — Conversion Ad</p>
              <div className="relative aspect-[9/16] max-w-xs mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <iframe
                  src="https://www.youtube.com/embed/Vu51NLokiwE"
                  frameBorder="0"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Outcome & Pricing */}
      <section className="section section-dark">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card"
            >
              <CheckCircle className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">The Outcome</h3>
              <p className="text-muted-foreground leading-relaxed">
                Authentic, high-impact videos ready to use across your website, social channels, and advertising campaigns — built to boost visibility and attract new clients.
              </p>
              <ul className="mt-6 space-y-3">
                {["Website hero videos", "Social media content", "Ad campaign creatives", "Client testimonial videos", "Team & workspace showcases"].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card text-center flex flex-col items-center justify-center"
            >
              <span className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Investment</span>
              <p className="text-5xl md:text-6xl font-bold text-primary mb-2">$5,000</p>
              <p className="text-lg text-muted-foreground mb-1">per video shoot</p>
              <p className="text-sm text-foreground font-semibold mb-6">8 to 15 ads-ready videos included</p>
              <a href="#contact" className="btn-hero-primary min-w-[200px] px-8">
                Become a Partner
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default VideoShooting;
