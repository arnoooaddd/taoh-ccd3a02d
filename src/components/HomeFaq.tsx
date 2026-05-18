import { Helmet } from 'react-helmet-async';

const faqs = [
  {
    q: "What does The Alpha Omega Hub do?",
    a: "The Alpha Omega Hub is a Tampa Bay digital marketing agency and growth accelerator that helps businesses generate qualified leads, improve paid advertising, build sales funnels, create conversion-focused websites, produce video ads, and grow revenue.",
  },
  {
    q: "How can contractors generate more leads?",
    a: "Contractors can generate more leads by combining paid advertising, strong offers, conversion-focused landing pages, local trust signals, video creative, retargeting, fast follow-up, and accurate conversion tracking.",
  },
  {
    q: "How can HVAC companies get more customers?",
    a: "HVAC companies can get more customers through Google Ads, Facebook Ads, local SEO foundations, high-converting landing pages, strong seasonal offers, customer reviews, retargeting, and fast speed-to-lead.",
  },
  {
    q: "Why are my paid ads not working?",
    a: "Paid ads often fail because the offer is weak, targeting is wrong, creative is poor, tracking is missing, the landing page does not convert, or follow-up is too slow.",
  },
  {
    q: "What is a lead generation funnel?",
    a: "A lead generation funnel is the system that turns traffic into leads, leads into appointments, and appointments into customers using ads, landing pages, forms, calls-to-action, retargeting, follow-up, and tracking.",
  },
  {
    q: "What is conversion-focused web design?",
    a: "Conversion-focused web design means building a website to generate business outcomes such as calls, form submissions, booked appointments, estimates, and leads — not just to look good.",
  },
  {
    q: "What is the ROI of paid ads?",
    a: "ROI depends on the offer, margins, sales process, cost per lead, conversion rate, and customer lifetime value. The Alpha Omega Hub focuses on tracking the full path from ad spend to lead quality, appointments, and revenue.",
  },
];

export const HomeFaq = () => (
  <section className="section" id="faq" aria-labelledby="faq-heading">
    <Helmet>
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a },
        })),
      })}</script>
    </Helmet>
    <div className="container mx-auto max-w-4xl px-4">
      <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold mb-10 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((f, i) => (
          <details key={i} className="glass-card group">
            <summary className="cursor-pointer text-lg font-semibold list-none flex justify-between items-center">
              <span>{f.q}</span>
              <span className="text-primary ml-4 group-open:rotate-45 transition-transform">+</span>
            </summary>
            <p className="mt-4 text-muted-foreground leading-relaxed">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);
