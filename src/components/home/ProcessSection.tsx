import { motion } from "framer-motion";
import { Phone, FileText, PenTool, Rocket, CheckCircle, Wrench } from "lucide-react";

const steps = [
  { icon: Phone, num: "01", title: "Consultation", desc: "Free discovery call" },
  { icon: FileText, num: "02", title: "Proposal", desc: "Detailed project plan" },
  { icon: PenTool, num: "03", title: "Agreement", desc: "NDA + contract" },
  { icon: Rocket, num: "04", title: "Execution", desc: "Development/installation" },
  { icon: CheckCircle, num: "05", title: "Delivery", desc: "Go-live support" },
  { icon: Wrench, num: "06", title: "Support", desc: "24/7 maintenance" },
];

const ProcessSection = () => (
  <section className="section-padding">
    <div className="container-wide mx-auto">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
          How We <span className="teal-gradient-text">Work</span>
        </h2>
      </motion.div>
      <div className="relative">
        {/* Timeline line - desktop */}
        <div className="hidden md:block timeline-line" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              className="text-center relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="w-16 h-16 rounded-full bg-secondary border border-border flex items-center justify-center mx-auto mb-3 relative z-10">
                <s.icon size={22} className="text-primary" />
              </div>
              <div className="mono-text text-xs text-primary font-bold mb-1">{s.num}</div>
              <h4 className="text-sm font-bold text-foreground mb-1">{s.title}</h4>
              <p className="text-xs text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProcessSection;
