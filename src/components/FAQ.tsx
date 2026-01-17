import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Do you sell leads or prospects?",
    answer: "No. We do not sell leads."
  },
  {
    question: "What do you do at The Alpha Omega Hub?",
    answer: "At TAOH, we help home services businesses grow through structured, high-quality advertising and brand positioning. We work across the entire home renovation and improvement ecosystem, including HVAC, solar, insulation, joinery, roofing, pools, home remodeling, and more. We produce professional content—video shoots, visuals, and copywriting—designed to showcase our clients' offers, services, and above all, their credibility and brand image. We do not rely on flashy messaging or unrealistic promises. Our approach is built around clarity, trust, and long-term positioning, helping serious businesses attract serious customers."
  },
  {
    question: "Why choose TAOH instead of another provider?",
    answer: "We are not a traditional agency—we are a growth accelerator. We specialize in home services and home renovation businesses. We understand your trades, your customers, and the realities of your market. Because we speak the same language as your business, we build campaigns that are relevant, credible, and aligned with your sales process—not generic marketing templates. Our focus is simple: helping you grow sustainably by strengthening your visibility, your reputation, and your commercial performance over the long term."
  }
];

export const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section" ref={ref} id="faq">
      <div className="container mx-auto max-w-4xl px-2 sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Common questions about our services and approach
          </p>
        </motion.div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between text-left p-0"
              >
                <div className="flex items-start gap-3 sm:gap-4 flex-1 min-w-0">
                  <span className="text-xl sm:text-2xl font-bold text-white/20 flex-shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-base sm:text-lg font-semibold">{faq.question}</h3>
                </div>
                <div className="flex-shrink-0 ml-2 sm:ml-4">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-muted-foreground pt-4 pl-2 sm:pl-12 pr-1 sm:pr-2 leading-relaxed text-sm sm:text-base">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a href="#contact" className="btn-hero-primary">
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};
