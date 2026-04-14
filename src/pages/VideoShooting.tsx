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
                <a href="#our-work" className="inline-flex items-center gap-2 min-w-[200px] px-8 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary/10 transition-colors justify-center">
                  View Our Work
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Review */}
      <section className="section">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card relative"
          >
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">★</span>
              ))}
            </div>
            <blockquote className="text-lg md:text-xl leading-relaxed text-foreground/90 italic mb-6">
              "Working with a marketing agency can sometimes feel like a chore, especially in the construction world. I've had some negative experiences in the past with other companies, but this team was a breath of fresh air.
              <br /><br />
              They recently came out to one of our completed remodeling projects to capture footage for future ads, and the entire experience was seamless.
              <br /><br />
              From the moment they arrived, it was clear they were pros. They didn't just show up with a camera; they had a full setup with professional lighting, multiple angles, and a clear vision for the shoot. What impressed me most was their preparation. They had scripts ready to go and knew exactly how to direct the flow of the day, which took a huge weight off our shoulders.
              <br /><br />
              They also went above and beyond in how they handled the homeowner. They were incredibly respectful of the space, kept the environment comfortable, and made sure the client felt at ease while we were all filming. It's rare to find a creative team that maintains that level of professionalism with customers while also being very friendly.
              <br /><br />
              If you're looking for an agency that actually knows how to produce high-quality content without the headache, I can't recommend them enough. They made the whole process easy, and the final results speak for themselves!"
            </blockquote>
            <div className="flex items-center gap-4">
              <div>
                <p className="font-semibold text-foreground">Hassan Erakat, MP</p>
                <p className="text-sm text-muted-foreground"><a href="https://www.progresscillc.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Progress Construction & Renovation</a></p>
                <p className="text-xs text-muted-foreground mt-1"><a href="https://maps.app.goo.gl/yC1CPEjkyQRoySX67" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">April 6, 2026 — Google Review ↗</a></p>
              </div>
            </div>
          </motion.div>
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
      <section id="our-work" className="section section-dark">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
              <p className="text-sm uppercase tracking-wider text-primary font-semibold mb-4">Middle of Funnel — Brand Ad</p>
              <div className="relative aspect-[9/16] max-w-xs mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <iframe
                  src="https://www.youtube.com/embed/Vu51NLokiwE"
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
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center"
            >
              <p className="text-sm uppercase tracking-wider text-primary font-semibold mb-4">Bottom of Funnel — Conversion Ad</p>
              <div className="relative aspect-[9/16] max-w-xs mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <iframe
                  src="https://www.youtube.com/embed/Z6955giAJXY"
                  frameBorder="0"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section className="section section-dark">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
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
              <div className="mt-8 text-center">
                <a href="#contact" className="btn-hero-primary min-w-[200px] px-8">
                  Become a Partner
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default VideoShooting;
