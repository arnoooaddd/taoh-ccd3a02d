import { motion } from 'framer-motion';

const videos = [
  {
    label: "Top of Funnel — Client Interview",
    src: "https://www.youtube.com/embed/HJtxQX0ekZ4",
    company: "West Tampa Tobacco",
    url: "https://www.westtampatobacco.com/",
    delay: 0.2,
  },
  {
    label: "Middle of Funnel — Brand Ad",
    src: "https://www.youtube.com/embed/Vu51NLokiwE",
    company: "Community Bible Baptist Church",
    url: "https://cbbcfla.com/",
    delay: 0.4,
  },
  {
    label: "Bottom of Funnel — Conversion Ad",
    src: "https://www.youtube.com/embed/Z6955giAJXY",
    company: "Progress Construction & Renovation",
    url: "https://www.progresscillc.com/",
    delay: 0.6,
  },
];

export const VideoShowcase = () => {
  return (
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
            Videos we produced for our partners across different industries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {videos.map((v) => (
            <motion.div
              key={v.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: v.delay }}
              className="text-center"
            >
              <p className="text-sm uppercase tracking-wider text-primary font-semibold mb-4">{v.label}</p>
              <div className="relative aspect-[9/16] max-w-xs mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <iframe
                  src={v.src}
                  frameBorder="0"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                <a href={v.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  {v.company} ↗
                </a>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
