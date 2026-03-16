import { motion } from "framer-motion";
import { Monitor, Smartphone, Camera, CreditCard, Mic } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Website Development",
    emoji: "📘",
    features: ["Static", "Dynamic", "E-commerce", "Corporate"],
    whatsapp: "Hi ENGPROOF, I'm interested in Website Development services.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    emoji: "📱",
    features: ["Android", "iOS", "Business", "E-commerce"],
    whatsapp: "Hi ENGPROOF, I'm interested in Mobile App Development services.",
  },
  {
    icon: Camera,
    title: "CCTV & Security",
    emoji: "🔒",
    features: ["Home", "Office", "Wireless", "Maintenance"],
    whatsapp: "Hi ENGPROOF, I'm interested in CCTV & Security services.",
  },
  {
    icon: CreditCard,
    title: "Digital ID Cards",
    emoji: "🆔",
    features: ["Corporate", "School", "QR Smart", "PVC"],
    whatsapp: "Hi ENGPROOF, I'm interested in Digital ID Card services.",
  },
  {
    icon: Mic,
    title: "Event Management",
    emoji: "🎤",
    features: ["Corporate", "Registration", "Technical"],
    whatsapp: "Hi ENGPROOF, I'm interested in Event Management services.",
  },
];

const ServicesPreview = () => (
  <section className="section-padding">
    <div className="container-wide mx-auto">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
          Our Premium <span className="teal-gradient-text text-glow">Services</span>
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Comprehensive solutions with instant WhatsApp booking
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            className="glass-card-hover p-6 flex flex-col justify-between aspect-auto min-h-[280px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04, duration: 0.4 }}
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <service.icon size={22} className="text-primary service-icon-glow" />
              </div>
              <h3 className="text-base font-bold text-foreground mb-3">{service.title}</h3>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {service.features.map((f) => (
                  <span key={f} className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
                    {f}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={`https://wa.me/917489741225?text=${encodeURIComponent(service.whatsapp)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn text-xs justify-center w-full"
            >
              {service.emoji} Book Now
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesPreview;
