import { motion } from "framer-motion";
import { Monitor, Smartphone, Camera, CreditCard, Mic, Phone } from "lucide-react";
import serviceCreative from "@/assets/service-creative.jpg";
import serviceOffset from "@/assets/service-offset.jpg";
import serviceFlex from "@/assets/service-event.jpg"; // Placeholder
import serviceAds from "@/assets/service-cctv.jpg"; // Placeholder
import serviceDigital from "@/assets/service-app.jpg"; // Placeholder

const services = [
  {
    icon: Monitor,
    title: "Creative Designing",
    emoji: "🎨",
    image: serviceCreative,
    features: ["Logo Design", "Visiting Cards", "Brochures", "Social Media"],
    whatsapp: "Hi Genius Pvt. Ltd., I'm interested in Creative Designing services.",
  },
  {
    icon: CreditCard,
    title: "Offset Printing",
    emoji: "🖨️",
    image: serviceOffset,
    features: ["Business Cards", "Letterheads", "Bill Books", "Pamphlets"],
    whatsapp: "Hi Genius Pvt. Ltd., I'm interested in Offset Printing services.",
  },
  {
    icon: Camera,
    title: "Flex Printing",
    emoji: "🚩",
    image: serviceFlex,
    features: ["Banners", "Hoardings", "Backlit Boards", "Vinyl"],
    whatsapp: "Hi Genius Pvt. Ltd., I'm interested in Flex Printing services.",
  },
  {
    icon: Mic,
    title: "Advertising Solutions",
    emoji: "📢",
    image: serviceAds,
    features: ["Outdoor Ads", "Shop Branding", "Event Promotions", "Campaigns"],
    whatsapp: "Hi Genius Pvt. Ltd., I'm interested in Advertising Solutions.",
  },
  {
    icon: Smartphone,
    title: "Digital Marketing",
    emoji: "🌐",
    image: serviceDigital,
    features: ["Social Media", "Google Ads", "SEO", "Lead Generation"],
    whatsapp: "Hi Genius Pvt. Ltd., I'm interested in Digital Marketing services.",
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
        <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-foreground">
          Our Premium <span className="teal-gradient-text text-glow">Services</span>
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Comprehensive branding and printing solutions for your business
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
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
              <div className="h-44 sm:h-48 overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-background/90 backdrop-blur-sm flex items-center justify-center shadow-sm">
                  <service.icon size={20} className="text-primary" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-foreground mb-3">{service.title}</h3>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {service.features.map((f) => (
                    <span key={f} className="text-[11px] px-2.5 py-1 rounded-full bg-secondary text-muted-foreground font-medium">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="px-5 pb-5">
              <a
                href="tel:+919770034731"
                className="btn-teal text-xs justify-center w-full inline-flex items-center gap-2 py-3"
              >
                <Phone size={14} /> Call for Details
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesPreview;
