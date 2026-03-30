import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

import blogBestAdPlatform from '@/assets/blog-best-ad-platform.png';
import blogLeadQualityLevels from '@/assets/blog-lead-quality-levels.png';
import blogStandOutCompetitors from '@/assets/blog-stand-out-competitors.png';
import blogRetargetLeads from '@/assets/blog-retarget-leads.png';
import blogChooseAgency from '@/assets/blog-choose-agency.png';
import blogInhouseVsAgency from '@/assets/blog-inhouse-vs-agency.png';
import blogHowLongAdsWork from '@/assets/blog-how-long-ads-work.png';
import blogEscapePriceWars from '@/assets/blog-escape-price-wars.png';
import blogNeverBuyLeads from '@/assets/blog-never-buy-leads.png';

export const blogArticles = [
  {
    slug: 'how-much-should-tampa-businesses-spend-on-ads-2026',
    title: 'How Much Should Tampa Bay Businesses Spend on Ads in 2026?',
    excerpt: 'Most businesses fail with ads not because they spend too much, but because they spend too little. Here are realistic budgets for Meta and Google Ads in Tampa Bay.',
    date: '2026-03-29',
    readTime: '14 min read',
    category: 'Paid Advertising',
    keywords: ['paid advertising agency', 'google ads agency', 'facebook ads agency', 'digital marketing agency tampa'],
    image: undefined as string | undefined,
  },
  {
    slug: 'google-ads-vs-facebook-ads-tampa-2026',
    title: 'Google Ads vs Facebook Ads: What Works Best for Tampa Bay Businesses in 2026?',
    excerpt: 'It is not "Which platform is better?" It is "Which platform fits your buying cycle, sales process, and growth goal?" Here is how to decide.',
    date: '2026-03-29',
    readTime: '12 min read',
    category: 'Paid Advertising',
    keywords: ['google ads agency', 'facebook ads agency', 'paid advertising agency', 'digital marketing agency tampa'],
    image: undefined as string | undefined,
  },
  {
    slug: 'why-paid-advertising-beats-random-lead-tactics-tampa-2026',
    title: 'Why Paid Advertising Beats Random Lead Tactics for Tampa Bay Businesses in 2026',
    excerpt: 'Most businesses do not have a lead problem. They have a system problem. Here is how to build a real acquisition engine with paid ads, funnels, and brand visibility.',
    date: '2026-03-29',
    readTime: '13 min read',
    category: 'Paid Advertising',
    keywords: ['paid advertising agency', 'digital marketing agency tampa', 'lead generation agency', 'sales funnel agency'],
    image: blogEscapePriceWars,
  },
  {
    slug: 'why-buying-leads-bad-strategy-tampa-2026',
    title: 'Why Buying Leads Is a Bad Strategy for Tampa Businesses in 2026',
    excerpt: 'Buying leads feels easy. In reality, it destroys margin, weakens brand value, and keeps you dependent on platforms you do not control. Here is what to build instead.',
    date: '2026-03-29',
    readTime: '15 min read',
    category: 'Lead Generation',
    keywords: ['digital marketing agency tampa', 'lead generation agency', 'customer acquisition', 'branding agency'],
    image: blogNeverBuyLeads,
  },
  {
    slug: 'should-you-hire-marketing-manager-in-house-2026',
    title: 'Should You Hire a Marketing Manager In-House in 2026? What Tampa Businesses Need to Know',
    excerpt: 'Hiring a marketing manager feels like control. In most cases, it gives you one salary, partial execution, and no real client acquisition system.',
    date: '2026-03-29',
    readTime: '14 min read',
    category: 'Growth Strategy',
    keywords: ['digital marketing agency tampa', 'lead generation agency', 'growth marketing'],
    image: blogInhouseVsAgency,
  },
  {
    slug: 'why-buying-home-renovation-leads-is-bad-strategy-2026',
    title: 'Why Buying Home Renovation Leads Is a Bad Strategy in 2026',
    excerpt: 'Buying leads looks efficient. In practice, it usually wrecks margin, weakens your brand, and keeps your sales team stuck chasing low-intent prospects.',
    date: '2026-03-29',
    readTime: '12 min read',
    category: 'Lead Generation',
    keywords: ['lead generation', 'contractor marketing', 'home services'],
    image: undefined as string | undefined,
  },
  {
    slug: 'digital-acquisition-results-timeline-tampa-bay-businesses',
    title: 'How Long Does It Take to See Results From Digital Acquisition in 2026?',
    excerpt: 'Most Tampa Bay businesses expect paid marketing to work too fast. Here is a realistic 90-day timeline for Meta Ads and Google Ads, including lead costs, appointment costs, and what to actually measure.',
    date: '2026-03-29',
    readTime: '14 min read',
    category: 'Paid Advertising',
    keywords: ['paid advertising agency', 'digital marketing agency tampa', 'lead generation agency', 'google ads agency', 'facebook ads agency'],
    image: blogHowLongAdsWork,
  },
  {
    slug: 'how-to-choose-a-digital-marketing-agency-in-tampa',
    title: 'How to Choose a Digital Marketing Agency in Tampa Without Wasting Time or Budget',
    excerpt: 'Most businesses do not need another agency that talks well. They need a team that understands their market, produces strong creative, and helps turn traffic into real customers.',
    date: '2026-03-29',
    readTime: '13 min read',
    category: 'Growth Strategy',
    keywords: ['digital marketing agency tampa', 'tampa digital marketing agency', 'lead generation agency', 'website design agency'],
    image: blogChooseAgency,
  },
  {
    slug: 'lead-qualification-levels-tampa-bay-businesses',
    title: 'Not All Leads Are Equal: The 4 Qualification Levels Tampa Bay Businesses Need to Use',
    excerpt: 'Most businesses don\'t have a lead problem. They have a lead sorting problem. Here are the 4 qualification levels that separate wasted ad spend from real pipeline.',
    date: '2026-03-29',
    readTime: '13 min read',
    category: 'Lead Generation',
    keywords: ['lead generation agency', 'digital marketing agency tampa', 'customer acquisition', 'sales funnel agency'],
    image: blogLeadQualityLevels,
  },
  {
    slug: 'contact-social-media-leads-tampa-bay-businesses',
    title: 'How Fast Should You Contact Social Media Leads? What Tampa Bay Businesses Need to Know',
    excerpt: 'Most businesses lose social media leads not because the lead was bad, but because they waited too long and followed up poorly. Here is the speed-to-lead system that wins.',
    date: '2026-03-29',
    readTime: '12 min read',
    category: 'Lead Generation',
    keywords: ['lead generation agency', 'facebook ads agency', 'customer acquisition', 'digital marketing agency tampa'],
    image: undefined as string | undefined,
  },
  {
    slug: 'google-ads-vs-facebook-ads-tampa-businesses',
    title: 'Google Ads or Facebook Ads: Which Platform Makes More Sense for Tampa Bay Businesses?',
    excerpt: 'If your business is ready to spend at least $2,000/month on advertising, platform choice starts to matter. Here is how to decide based on your offer, sales cycle, and buyer intent.',
    date: '2026-03-29',
    readTime: '13 min read',
    category: 'Paid Advertising',
    keywords: ['google ads agency', 'facebook ads agency', 'paid advertising agency', 'digital marketing agency tampa'],
    image: blogBestAdPlatform,
  },
  {
    slug: 'retargeting-paid-ads-tampa-bay-businesses',
    title: 'Why Retargeting Matters for Tampa Bay Businesses Running Paid Ads',
    excerpt: 'Most prospects do not buy the first time they see you. If your business is spending on paid traffic and not retargeting, you are leaking revenue every day.',
    date: '2026-03-29',
    readTime: '13 min read',
    category: 'Paid Advertising',
    keywords: ['paid advertising agency', 'lead generation agency', 'digital marketing agency tampa', 'customer acquisition'],
    image: blogRetargetLeads,
  },
  {
    slug: 'tampa-bay-business-marketing-content-paid-ads-2026',
    title: 'Tampa Bay Businesses Should Have Started Building Their Marketing System in 2016. In 2026, Content Is No Longer Optional.',
    excerpt: 'Paid ads still matter, but content, brand visibility, and data now decide who wins attention first. Here is the multichannel growth system Tampa Bay businesses need in 2026.',
    date: '2026-03-29',
    readTime: '14 min read',
    category: 'Growth Strategy',
    keywords: ['digital marketing agency tampa', 'content marketing services', 'growth marketing services', 'brand positioning services'],
    image: undefined as string | undefined,
  },
  {
    slug: 'stand-out-from-untrustworthy-competitors-tampa-businesses',
    title: 'How Tampa Bay Businesses Can Stand Out in a Market Where Buyers Don\'t Trust Anyone',
    excerpt: 'Getting attention is not enough anymore. If you want to grow in Tampa Bay, you need marketing that generates demand and reduces buyer hesitation at the same time.',
    date: '2026-03-29',
    readTime: '14 min read',
    category: 'Growth Strategy',
    keywords: ['lead generation agency', 'digital marketing agency tampa', 'customer acquisition', 'brand positioning services'],
    image: blogStandOutCompetitors,
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
