import { motion } from "framer-motion";

const logos = Array.from({ length: 6 }, (_, i) => `Client ${i + 1}`);

const TrustBar = () => (
  <section className="py-10 sm:py-12 border-y border-border/50">
    <div className="container-wide mx-auto px-4 md:px-8">
      <motion.p
        className="text-center text-xs uppercase tracking-widest text-muted-foreground mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Trusted by innovative companies across India
      </motion.p>
      <div className="flex items-center justify-center gap-6 sm:gap-8 md:gap-16 flex-wrap">
        {logos.map((name, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="text-sm font-bold text-muted-foreground/40 mono-text tracking-wider"
          >
            {name}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;
