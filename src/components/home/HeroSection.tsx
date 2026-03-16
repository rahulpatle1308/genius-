import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Monitor, Smartphone, Camera, CreditCard, Mic } from "lucide-react";

const floatingNodes = [
  { icon: Monitor, label: "Web", x: "10%", y: "15%", delay: 0 },
  { icon: Smartphone, label: "App", x: "65%", y: "5%", delay: 0.5 },
  { icon: Camera, label: "CCTV", x: "70%", y: "60%", delay: 1 },
  { icon: CreditCard, label: "ID", x: "5%", y: "65%", delay: 1.5 },
  { icon: Mic, label: "Events", x: "40%", y: "75%", delay: 0.8 },
];

const stats = [
  { value: "50+", label: "Projects" },
  { value: "24/7", label: "Support" },
  { value: "100%", label: "Confidentiality" },
];

const HeroSection = () => (
  <section className="section-padding overflow-hidden">
    <div className="container-wide mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="badge-primary mb-6">⭐ Trusted by 50+ Businesses Across India</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6">
            Enterprise-Grade{" "}
            <span className="teal-gradient-text">Technology</span> &{" "}
            <span className="teal-gradient-text">Security</span> Solutions
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
            Complete digital and physical security under one roof. From website development to CCTV installation, we protect and grow your business.
          </p>
          <div className="flex flex-wrap gap-4 mb-10">
            <Link to="/services" className="btn-teal">
              Explore Services
            </Link>
            <Link to="/contact" className="btn-outline-light">
              Schedule Consultation
            </Link>
          </div>
          <div className="flex gap-8">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-extrabold text-foreground mono-text">{s.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right - Floating Nodes */}
        <div className="relative h-[350px] md:h-[450px] hidden md:block">
          {/* Central glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-primary/10 blur-3xl" />
          </div>
          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <line x1="30" y1="30" x2="75" y2="20" stroke="hsl(187 100% 42% / 0.15)" strokeWidth="0.3" />
            <line x1="75" y1="20" x2="80" y2="70" stroke="hsl(187 100% 42% / 0.15)" strokeWidth="0.3" />
            <line x1="80" y1="70" x2="50" y2="80" stroke="hsl(187 100% 42% / 0.15)" strokeWidth="0.3" />
            <line x1="50" y1="80" x2="20" y2="75" stroke="hsl(187 100% 42% / 0.15)" strokeWidth="0.3" />
            <line x1="20" y1="75" x2="30" y2="30" stroke="hsl(187 100% 42% / 0.15)" strokeWidth="0.3" />
          </svg>
          {floatingNodes.map((node, i) => (
            <motion.div
              key={node.label}
              className="absolute glass-card p-4 flex flex-col items-center gap-2 min-w-[80px]"
              style={{ left: node.x, top: node.y }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + node.delay * 0.3, duration: 0.5 }}
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <node.icon size={24} className="text-primary service-icon-glow" />
              </motion.div>
              <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">{node.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
