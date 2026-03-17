import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "TechStart Solutions",
    quote: "ENGPROOF delivered our e-commerce website ahead of schedule. Their attention to detail and commitment to confidentiality is unmatched.",
  },
  {
    name: "Priya Sharma",
    company: "SecureHome Properties",
    quote: "The CCTV installation was seamless. 24/7 support means we never worry about our security systems going down.",
  },
  {
    name: "Amit Patel",
    company: "EduFirst Academy",
    quote: "Smart QR ID cards for 500+ students delivered in just 3 days. The quality and turnaround time exceeded our expectations.",
  },
];

const TestimonialsSection = () => (
  <section className="section-padding bg-secondary/50">
    <div className="container-wide mx-auto">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
          What Our Clients <span className="teal-gradient-text">Say</span>
        </h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            className="glass-card-hover p-6"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
          >
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} size={14} className="fill-primary text-primary" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5 italic">"{t.quote}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center text-sm font-bold text-primary">
                {t.name[0]}
              </div>
              <div>
                <div className="text-sm font-bold text-foreground">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.company}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
