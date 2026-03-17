import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Monitor, Smartphone, Camera, CreditCard, Mic } from "lucide-react";

const categories = [
  {
    icon: Monitor,
    emoji: "📘",
    title: "Website Development",
    href: "/services/website-development",
    services: [
      { name: "Static Website", price: "Starting ₹15,000", features: ["5 pages", "SEO ready", "Mobile responsive"] },
      { name: "Dynamic Website", price: "Starting ₹35,000", features: ["Admin panel", "CMS", "Database"] },
      { name: "E-commerce Website", price: "Starting ₹60,000", features: ["Payment gateway", "Product management"] },
      { name: "Corporate Website", price: "Custom Quote", features: ["Enterprise grade", "Scalable"] },
      { name: "Custom Web App", price: "Custom Quote", features: ["CRM", "Automation", "APIs"] },
    ],
  },
  {
    icon: Smartphone,
    emoji: "📱",
    title: "Mobile App Development",
    href: "/services/mobile-app-development",
    services: [
      { name: "Android App", price: "Starting ₹50,000", features: ["Native Kotlin/Java", "Play Store"] },
      { name: "iOS App", price: "Starting ₹60,000", features: ["Native Swift", "App Store"] },
      { name: "Business App", price: "Custom Quote", features: ["Service booking", "Management"] },
      { name: "E-commerce App", price: "Custom Quote", features: ["Shopping", "Payments"] },
    ],
  },
  {
    icon: Camera,
    emoji: "🔒",
    title: "CCTV & Security Systems",
    href: "/services/cctv-security",
    services: [
      { name: "Home CCTV", price: "Starting ₹8,000", features: ["Indoor/outdoor", "Night vision"] },
      { name: "Office Security", price: "Starting ₹15,000", features: ["HD cameras", "DVR/NVR"] },
      { name: "Wireless CCTV", price: "Starting ₹12,000", features: ["WiFi cameras", "Cloud backup"] },
      { name: "Maintenance", price: "Starting ₹2,000/mo", features: ["Regular inspection", "Upgrades"] },
    ],
  },
  {
    icon: CreditCard,
    emoji: "🆔",
    title: "Digital ID Card Services",
    href: "/services/digital-id-cards",
    services: [
      { name: "Corporate ID", price: "Starting ₹50/card", features: ["Professional design", "Company logo"] },
      { name: "School ID", price: "Starting ₹30/card", features: ["Student/staff", "Library card"] },
      { name: "Smart QR ID", price: "Starting ₹80/card", features: ["QR code", "Digital verification"] },
      { name: "PVC Printed ID", price: "Starting ₹100/card", features: ["High-quality PVC", "Full color"] },
    ],
  },
  {
    icon: Mic,
    emoji: "🎤",
    title: "Event Management",
    href: "/services/event-management",
    services: [
      { name: "Corporate Events", price: "Custom Quote", features: ["Conferences", "Seminars", "Launches"] },
      { name: "Registration Systems", price: "Starting ₹15,000", features: ["QR check-in", "Digital certificates"] },
      { name: "Technical Support", price: "Starting ₹10,000", features: ["Sound", "Lighting", "Streaming"] },
    ],
  },
];

const Services = () => (
  <Layout>
    <section className="section-padding">
      <div className="container-wide mx-auto">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
            Our <span className="teal-gradient-text">Comprehensive</span> Solutions
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-lg mx-auto">
            End-to-end technology and security services for modern businesses
          </p>
        </motion.div>

        <div className="space-y-14 sm:space-y-16">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.05, duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <cat.icon size={20} className="text-primary" />
                </div>
                <Link to={cat.href} className="text-lg sm:text-xl font-extrabold text-foreground hover:text-primary transition-colors">
                  {cat.emoji} {cat.title}
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {cat.services.map((s, si) => (
                  <motion.div
                    key={s.name}
                    className="glass-card-hover p-5 flex flex-col justify-between"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: si * 0.06, duration: 0.4 }}
                  >
                    <div>
                      <h3 className="font-bold text-foreground text-sm mb-1">{s.name}</h3>
                      <p className="mono-text text-xs text-primary font-bold mb-3">{s.price}</p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {s.features.map((f) => (
                          <span key={f} className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">{f}</span>
                        ))}
                      </div>
                    </div>
                    <a
                      href={`https://wa.me/917489741225?text=${encodeURIComponent(`Hi ENGPROOF, I'm interested in ${s.name}. Can we discuss?`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="whatsapp-btn text-xs justify-center w-full"
                    >
                      {cat.emoji} Book Now
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16 glass-card p-6 sm:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg font-bold text-foreground mb-3">Need a custom solution?</p>
          <Link to="/contact" className="btn-teal">Contact Us for a Personalized Quote</Link>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Services;
