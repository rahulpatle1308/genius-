import { motion } from "framer-motion";
import { Monitor, Smartphone, Camera, CreditCard, Mic } from "lucide-react";
import serviceWeb from "@/assets/service-web.jpg";
import serviceApp from "@/assets/service-app.jpg";
import serviceCctv from "@/assets/service-cctv.jpg";
import serviceId from "@/assets/service-id.jpg";
import serviceEvent from "@/assets/service-event.jpg";

const services = [
  {
    icon: Monitor,
    title: "Website Development",
    emoji: "📘",
    image: serviceWeb,
    features: ["Static", "Dynamic", "E-commerce", "Corporate"],
    whatsapp: "Hi ENGPROOF, I'm interested in Website Development services.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    emoji: "📱",
    image: serviceApp,
    features: ["Android", "iOS", "Business", "E-commerce"],
    whatsapp: "Hi ENGPROOF, I'm interested in Mobile App Development services.",
  },
  {
    icon: Camera,
    title: "CCTV & Security",
    emoji: "🔒",
    image: serviceCctv,
    features: ["Home", "Office", "Wireless", "Maintenance"],
    whatsapp: "Hi ENGPROOF, I'm interested in CCTV & Security services.",
  },
  {
    icon: CreditCard,
    title: "Digital ID Cards",
    emoji: "🆔",
    image: serviceId,
    features: ["Corporate", "School", "QR Smart", "PVC"],
    whatsapp: "Hi ENGPROOF, I'm interested in Digital ID Card services.",
  },
  {
    icon: Mic,
    title: "Event Management",
    emoji: "🎤",
    image: serviceEvent,
    features: ["Corporate", "Registration", "Technical"],
    whatsapp: "Hi ENGPROOF, I'm interested in Event Management services.",
  },
];

const ServicesPreview = () => (
  <section className="section-padding">
    <div className="container-wide mx-auto">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
          Our Premium <span className="teal-gradient-text text-glow">Services</span>
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Comprehensive solutions with instant WhatsApp booking
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            className="glass-card-hover overflow-hidden flex flex-col justify-between"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
          >
            <div>
              <div className="h-36 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-foreground mb-3">{service.title}</h3>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {service.features.map((f) => (
                    <span key={f} className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="px-5 pb-5">
              <a
                href={`https://wa.me/917489741225?text=${encodeURIComponent(service.whatsapp)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn text-xs justify-center w-full"
              >
                {service.emoji} Book Now
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesPreview;
