import { motion } from "framer-motion";
import { Shield, Zap, Trophy, Briefcase } from "lucide-react";

const features = [
  { icon: Shield, title: "Complete Branding", desc: "From concept to creation and printing to promotion — managed professionally." },
  { icon: Trophy, title: "Creative Expertise", desc: "We combine strong design thinking with production quality and strategy." },
  { icon: Zap, title: "Fast Delivery", desc: "Timely execution with high-quality output and professional commitment." },
  { icon: Briefcase, title: "Affordable Pricing", desc: "Premium service quality with cost-effective and smart business solutions." },
];

const WhyChooseUs = () => (
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
          Why Choose <span className="teal-gradient-text">Genius Pvt. Ltd.</span>
        </h2>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            className="glass-card-hover p-6 text-center"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <f.icon size={24} className="text-primary service-icon-glow" />
            </div>
            <h3 className="font-bold text-foreground mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
