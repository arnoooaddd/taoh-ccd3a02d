import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const reviews = [
  {
    name: "Ryan Griffiths",
    company: "Turfit",
    reviewUrl: "https://maps.app.goo.gl/eBuwgJmY6jQ8tFr8A",
    date: "June 2026",
    text: "Working with Arno has been amazing. They are a top notch and professional team. He met with me promtly to go over his strategy and how it would apply to our business and we quickly scheduled time to get started on work. They have been punctual and already produced fantastic content for us. Looking forward to an ongoing advertising relationship.",
  },
  {
    name: "Hassan Erakat, MP",
    company: "Progress Construction & Renovation",
    companyUrl: "https://www.progresscillc.com/",
    reviewUrl: "https://maps.app.goo.gl/jFgbPGNX7CFrZZpA6",
    date: "April 2026",
    text: "Working with a marketing agency can sometimes feel like a chore, especially in the construction world. This team was a breath of fresh air. They recently came out to one of our completed remodeling projects to capture footage for future ads, and the entire experience was seamless. From the moment they arrived, it was clear they were pros — full setup with professional lighting, multiple angles, and a clear vision. They had scripts ready and knew exactly how to direct the flow of the day. They were also incredibly respectful of the homeowner's space. If you're looking for an agency that actually knows how to produce high-quality content without the headache, I can't recommend them enough.",
  },
  {
    name: "Dave Ellis",
    company: "The Racing Line",
    companyUrl: "https://theracingline.app/",
    reviewUrl: "https://maps.app.goo.gl/p7Ah7UYWBjmPep1R7",
    date: "December 2025",
    text: "Really really helpful people. They run my Meta ad campaigns, and have suggested changes to the pricing and onboarding of my product, both of which improved conversion rates. They're generally just great at marketing; including the product side of things. Fully recommend.",
  },
];

export const Reviews = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section section-dark" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What Our Partners Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Verified Google reviews from Tampa Bay business owners we work with
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="glass-card flex flex-col"
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <blockquote className="text-base leading-relaxed text-foreground/90 italic mb-4 flex-1">
                "{review.text}"
              </blockquote>
              <div>
                <p className="font-semibold text-foreground">{review.name}</p>
                <p className="text-sm text-muted-foreground">
                  {review.companyUrl ? (
                    <a href={review.companyUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      {review.company}
                    </a>
                  ) : (
                    review.company
                  )}
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a href="#contact" className="btn-hero-primary">
            Join Our Partners
          </a>
        </motion.div>
      </div>
    </section>
  );
};
