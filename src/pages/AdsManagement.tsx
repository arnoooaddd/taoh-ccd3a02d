import { ServicePageLayout } from '@/components/ServicePageLayout';
import { motion } from 'framer-motion';
import { BarChart3, Target, Brain, RefreshCw, LineChart, Shield, DollarSign, TrendingUp, Zap, CheckCircle, ArrowDown } from 'lucide-react';
import { Interview } from '@/components/Interview';
import { Stats } from '@/components/Stats';

const features = [
  { icon: Target, title: "Meta Ads Campaign Management", desc: "Full campaign management on Facebook & Instagram to reach your ideal customers." },
  { icon: Brain, title: "AI-Driven Conversion Tracking (AI-DCT)", desc: "Our proprietary AI tracking system optimizes every dollar of your ad spend." },
  { icon: LineChart, title: "Continuous Optimization", desc: "Performance data and industry trends drive continuous campaign improvements." },
  { icon: RefreshCw, title: "Creative Refresh & Offer Updates", desc: "We update offers, angles, and creatives to maintain peak relevance." },
  { icon: BarChart3, title: "Performance Reviews Every 6 Weeks", desc: "Detailed ROI analysis and strategic adjustments to maximize results." },
  { icon: Shield, title: "Full Transparency", desc: "Complete transparency over campaign management — you see everything we do." },
];

const stats = [
  { icon: DollarSign, value: "$8M+", label: "Revenue Generated", desc: "For our partners in the last 3 years" },
  { icon: TrendingUp, value: ">400%", label: "Average ROI", desc: "Gross margin return on investment" },
  { icon: Target, value: "$570K+", label: "Ad Spend Managed", desc: "Across multiple industries" },
  { icon: Zap, value: "30", label: "Days to First Results", desc: "With our pay-per-appointment system" },
];

const AdsManagement = () => {
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
                📊 Lead Generation & Ads Management
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Running Your Ads
                <br />
                <span className="text-gradient">From Alpha to Omega</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                A predictable, scalable acquisition engine powered by AI tracking and creative optimization.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#contact" className="btn-hero-primary inline-flex items-center gap-2 min-w-[200px] px-8">
                  Get Started <ArrowDown className="w-5 h-5" />
                </a>
                <a href="#results" className="inline-flex items-center gap-2 min-w-[200px] px-8 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary/10 transition-all text-center justify-center">
                  See Our Results
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* KPIs */}
      <section className="section section-dark">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
              Powered by Agendac, our French subsidiary
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Proven Results, Verified Numbers
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="stat-card"
              >
                <stat.icon className="w-10 h-10 mx-auto mb-4 text-foreground" />
                <p className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</p>
                <p className="text-lg font-semibold mb-2">{stat.label}</p>
                <p className="text-sm text-muted-foreground">{stat.desc}</p>
              </motion.div>
            ))}
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
              3–24 Month Partnership
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              We operate and optimize your entire customer acquisition system
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

      {/* Outcome + Pricing */}
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
                A fully managed acquisition engine powered by AI tracking, creative refreshes, and continuous optimization — built to deliver predictable, scalable lead flow for your business.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Predictable lead flow",
                  "Scalable acquisition system",
                  "Long-term cost-per-lead reduction",
                  "Complete ROI visibility",
                  "Pay-per-appointment model available",
                ].map(item => (
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
              <p className="text-lg text-muted-foreground mb-1">Starting at</p>
              <p className="text-5xl md:text-6xl font-bold text-primary mb-2">$2,000</p>
              <p className="text-lg text-muted-foreground mb-6">per month</p>
              <a href="#contact" className="btn-hero-primary min-w-[200px] px-8">
                Become a Partner
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partner Interview */}
      <Interview />
    </ServicePageLayout>
  );
};

export default AdsManagement;
