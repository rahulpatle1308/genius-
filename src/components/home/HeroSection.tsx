import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { value: "5+", label: "Projects" },
  { value: "24/7", label: "Support" },
  { value: "100%", label: "Confidentiality" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

const HeroSection = () => (
  <section className="relative overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src={heroBg} alt="Technology workspace" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
    </div>

    <div className="relative z-10 section-padding">
      <div className="container-wide mx-auto">
        <div className="max-w-2xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <div className="badge-primary mb-6">⭐ Trusted by Businesses Across India</div>
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 text-foreground">
              Enterprise-Grade{" "}
              <span className="teal-gradient-text">Technology</span> &{" "}
              <span className="teal-gradient-text">Security</span> Solutions
            </motion.h1>
            <motion.p variants={itemVariants} className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Complete digital and physical security under one roof. From website development to CCTV installation, we protect and grow your business.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-10">
              <Link to="/services" className="btn-teal inline-flex items-center justify-center gap-2 text-base py-3.5 px-7">
                Explore Services <ArrowRight size={18} />
              </Link>
              <a href="tel:+917489741225" className="btn-outline-light text-center inline-flex items-center justify-center gap-2 text-base py-3.5 px-7">
                <Phone size={18} /> Call Now
              </a>
            </motion.div>
            <motion.div variants={itemVariants} className="flex gap-8">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.15 }}
                >
                  <div className="text-2xl font-extrabold text-foreground mono-text">{s.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{s.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
