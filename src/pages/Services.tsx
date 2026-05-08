import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Monitor, Smartphone, Camera, CreditCard, Mic, Phone } from "lucide-react";

const categories = [
  {
    icon: Monitor,
    emoji: "🎨",
    title: "Creative Designing",
    href: "/services/creative-designing",
    services: [
      { name: "Logo Design", price: "Custom Quote", features: ["Brand identity", "Vector files"] },
      { name: "Visiting Cards", price: "Starting ₹500", features: ["Premium paper", "Matte/Gloss"] },
      { name: "Brochures", price: "Custom Quote", features: ["Tri-fold", "Bi-fold", "Z-fold"] },
      { name: "Social Media", price: "Starting ₹5,000", features: ["Posters", "Creatives", "Ads"] },
      { name: "Packaging", price: "Custom Quote", features: ["Product design", "Box labels"] },
    ],
  },
  {
    icon: CreditCard,
    emoji: "🖨️",
    title: "Offset Printing",
    href: "/services/offset-printing",
    services: [
      { name: "Business Cards", price: "Starting ₹200", features: ["Bulk printing", "Finishing"] },
      { name: "Bill Books", price: "Starting ₹150", features: ["Duplicate/Triplicate", "Serial numbering"] },
      { name: "Pamphlets", price: "Starting ₹1,000", features: ["A4/A5", "Color printing"] },
      { name: "Catalogues", price: "Custom Quote", features: ["Magazines", "Profiles"] },
      { name: "Stickers", price: "Starting ₹2/pc", features: ["Custom shapes", "Adhesive"] },
    ],
  },
  {
    icon: Camera,
    emoji: "🚩",
    title: "Flex Printing",
    href: "/services/flex-printing",
    services: [
      { name: "Flex Banners", price: "Starting ₹10/sqft", features: ["Outdoor durable", "Quality ink"] },
      { name: "Hoardings", price: "Custom Quote", features: ["Large scale", "Installation"] },
      { name: "Backlit Boards", price: "Custom Quote", features: ["Glow sign", "LED inside"] },
      { name: "Vinyl Printing", price: "Starting ₹35/sqft", features: ["Self-adhesive", "Indoor/Outdoor"] },
    ],
  },
  {
    icon: Mic,
    emoji: "📢",
    title: "Advertising Solutions",
    href: "/services/advertising-solutions",
    services: [
      { name: "Outdoor Ads", price: "Custom Quote", features: ["Billboard", "Bus shelter"] },
      { name: "Shop Branding", price: "Custom Quote", features: ["ACP LED", "Front branding"] },
      { name: "Event Promotion", price: "Custom Quote", features: ["Corporate", "Political"] },
      { name: "Product Launch", price: "Custom Quote", features: ["Branding support"] },
    ],
  },
  {
    icon: Smartphone,
    emoji: "🌐",
    title: "Digital Marketing & Apps",
    href: "/services/digital-marketing",
    services: [
      { name: "Social Media Mgmt", price: "Starting ₹8,000/mo", features: ["Daily posts", "Engagement"] },
      { name: "Google Ads", price: "Custom Quote", features: ["PPC", "Lead gen"] },
      { name: "SEO Services", price: "Starting ₹10,000/mo", features: ["Rankings", "Website audit"] },
      { name: "App Development", price: "Starting ₹1,50,000", features: ["Android/iOS", "Admin panel"] },
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
                      href="tel:+919770034731"
                      className="btn-teal text-xs justify-center w-full py-2.5 inline-flex items-center gap-2"
                    >
                      <Phone size={14} /> Call Now
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
