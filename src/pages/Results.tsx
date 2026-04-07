import { Navbar } from '@/components/Navbar';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { DollarSign, TrendingUp, Target, Zap, ArrowDown, CheckCircle } from 'lucide-react';

const stats = [
  { icon: DollarSign, value: "$8M+", label: "Revenue Generated", desc: "For our partners in the last 3 years" },
  { icon: TrendingUp, value: ">400%", label: "Average ROI", desc: "Gross margin return on investment" },
  { icon: Target, value: "$570K+", label: "Ad Spend Managed", desc: "Across multiple industries" },
  { icon: Zap, value: "30", label: "Days to First Results", desc: "With our pay-per-appointment system" },
];

const reviews = [
  {
    name: "Dave Ellis",
    company: "The Racing Line",
    companyUrl: "https://theracingline.app/",
    reviewUrl: "https://maps.app.goo.gl/QQgrYnLSyGrdgoNj8",
    date: "December 2025",
    text: "Really really helpful people. They run my Meta ad campaigns, and have suggested changes to the pricing and onboarding of my product, both of which improved conversion rates. They're generally just great at marketing; including the product side of things. Fully recommend.",
  },
  {
    name: "Hassan Erakat, MP",
    company: "Progress Construction & Renovation",
    companyUrl: "https://www.progresscillc.com/",
    reviewUrl: "https://maps.app.goo.gl/yC1CPEjkyQRoySX67",
    date: "April 6, 2026",
    text: "Working with a marketing agency can sometimes feel like a chore, especially in the construction world. I've had some negative experiences in the past with other companies, but this team was a breath of fresh air.\n\nThey recently came out to one of our completed remodeling projects to capture footage for future ads, and the entire experience was seamless.\n\nFrom the moment they arrived, it was clear they were pros. They didn't just show up with a camera; they had a full setup with professional lighting, multiple angles, and a clear vision for the shoot. What impressed me most was their preparation. They had scripts ready to go and knew exactly how to direct the flow of the day, which took a huge weight off our shoulders.\n\nThey also went above and beyond in how they handled the homeowner. They were incredibly respectful of the space, kept the environment comfortable, and made sure the client felt at ease while we were all filming. It's rare to find a creative team that maintains that level of professionalism with customers while also being very friendly.\n\nIf you're looking for an agency that actually knows how to produce high-quality content without the headache, I can't recommend them enough. They made the whole process easy, and the final results speak for themselves!",
  },
];

const Results = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Helmet>
        <title>Our Results | The Alpha Omega Hub</title>
        <meta name="description" content="Verified results from our partners — Google reviews, video interviews, and real numbers. See why businesses trust The Alpha Omega Hub." />
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-[hsl(var(--color-darker))]" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-sm uppercase tracking-widest text-primary font-semibold mb-4">
                🏆 Verified Results
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Our Partners Get{' '}
                <span className="text-gradient">Excellent Results</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                The proof is in the numbers, the videos, and the reviews. Every business below is verifiable.
              </p>
              <a href="#stats" className="btn-hero-primary inline-flex items-center gap-2 px-8">
                See the Proof <ArrowDown className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* KPIs */}
      <section id="stats" className="section section-dark">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
              Powered by <a href="https://agendac.fr/?lang=en-US" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Agendac</a>, our French subsidiary
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

      {/* Partner Interview */}
      <section className="section">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
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
        </div>
      </section>

      {/* Google Reviews */}
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
              Google Reviews
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              What our partners say about working with us
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {reviews.map((review, i) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="glass-card"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <blockquote className="text-lg leading-relaxed text-foreground/90 italic mb-6 whitespace-pre-line">
                  "{review.text}"
                </blockquote>
                <div>
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">
                    <a href={review.companyUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      {review.company}
                    </a>
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    <a href={review.reviewUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      {review.date} — Google Review ↗
                    </a>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Elfsight Google Reviews Widget */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-5xl mx-auto mt-16"
          >
            <p className="text-center text-sm uppercase tracking-wider text-muted-foreground mb-6">
              Reviews from <a href="https://maps.app.goo.gl/SXCCfqnP1hTmbrjD8" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Agendac</a>, our subsidiary in France
            </p>
            <div
              className="elfsight-app-6ed2862a-6a58-46df-8794-f87f430bcf80"
              data-elfsight-app-lazy
            />
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="section">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Meet Our Partners
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Moments from our in-person client meetings and video shoots
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            <div
              className="elfsight-app-71fe0748-62ad-4959-822a-e609d5bb3a38"
              data-elfsight-app-lazy
            />
          </motion.div>
        </div>
      </section>

      {/* Partners Logo Showcase */}
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
              They Trust Us
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Partners from <a href="https://agendac.fr/?lang=en-US" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Agendac</a>, our subsidiary in France
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            <div
              className="elfsight-app-b1e000b2-31a9-48e4-8175-d63a0e2fdacd"
              data-elfsight-app-lazy
            />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Turn Next</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Join the businesses that trust us to grow their brand and revenue.
            </p>
            <a href="#contact" className="btn-hero-primary px-8">
              Become a Partner
            </a>
          </motion.div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
};

export default Results;
