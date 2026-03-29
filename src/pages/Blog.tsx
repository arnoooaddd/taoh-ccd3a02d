import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export const blogArticles = [
  {
    slug: 'why-buying-home-renovation-leads-is-bad-strategy-2026',
    title: 'Why Buying Home Renovation Leads Is a Bad Strategy in 2026',
    excerpt: 'Buying leads looks efficient. In practice, it usually wrecks margin, weakens your brand, and keeps your sales team stuck chasing low-intent prospects.',
    date: '2026-03-29',
    readTime: '12 min read',
    category: 'Lead Generation',
    keywords: ['lead generation', 'contractor marketing', 'home services'],
  },
];

const Blog = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Helmet>
        <title>Blog | The Alpha Omega Hub — Growth Marketing Insights</title>
        <meta name="description" content="Expert insights on lead generation, paid ads, contractor marketing, and growth strategies for established businesses. Read the latest from The Alpha Omega Hub." />
        <link rel="canonical" href="https://thealphaomegahub.com/blog" />
      </Helmet>
      <Navbar />
      <section className="pt-32 pb-20 px-4 md:px-8">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block">Our Blog</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Growth Marketing <span className="text-gradient">Insights</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Actionable strategies for established businesses looking to scale through smart digital marketing, paid ads, and brand positioning.
            </p>
          </motion.div>

          <div className="grid gap-8">
            {blogArticles.map((article, index) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={`/blog/${article.slug}`}
                  className="glass-card group block hover:bg-white/10 transition-all duration-500"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {article.category}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          {new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          {article.readTime}
                        </span>
                      </div>
                      <h2 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {article.title}
                      </h2>
                      <p className="text-muted-foreground text-sm md:text-base line-clamp-2">
                        {article.excerpt}
                      </p>
                    </div>
                    <ArrowRight className="w-6 h-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Blog;
