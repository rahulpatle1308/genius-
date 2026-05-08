import Layout from "@/components/layout/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Phone } from "lucide-react";
import projectWeb from "@/assets/project-website.jpg";
import projectApp from "@/assets/project-app.jpg";
import projectCctv from "@/assets/project-cctv.jpg";
import projectId from "@/assets/project-idcard.jpg";
import projectEvent from "@/assets/project-event.jpg";

const categories = ["All", "Branding", "Printing", "Digital Ads", "Signage"];

const projects = [
  { title: "EcoFriendly Brand Identity", category: "Branding", client: "EcoFriendly Organics", desc: "Complete logo and brand guide with sustainable packaging design.", impact: "Successfully launched in 10 cities", image: projectWeb },
  { title: "Premium Corporate Catalogues", category: "Printing", client: "InnoTech Corp", desc: "1000+ luxury brochures with spot UV and matte finish.", impact: "Zero printing errors across bulk order", image: projectCctv },
  { title: "Smart City LED Signage", category: "Signage", client: "Municipal Corp", desc: "Durable ACP LED boards across major city squares.", impact: "High visibility and energy efficient", image: projectId },
  { title: "Global Reach Digital Ads", category: "Digital Ads", client: "Global Solutions", desc: "Full performance marketing and social media management.", impact: "50% increase in lead generation", image: projectApp },
  { title: "Heritage Event Branding", category: "Branding", client: "Heritage Foundation", desc: "End-to-end branding for a 3-day cultural festival.", impact: "Attracted 10,000+ visitors", image: projectEvent },
  { title: "Pharma Packaging Design", category: "Branding", client: "LifeCare Pharma", desc: "Secure and attractive medicine box and label designs.", impact: "Compliant with all health regulations", image: projectWeb },
];

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-foreground">
              Our <span className="teal-gradient-text">Success Stories</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground">Real projects, real results</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  filter === c ? "btn-teal" : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {filtered.map((p, i) => (
                <motion.div
                  key={p.title}
                  className="glass-card-hover overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <div className="h-48 sm:h-56 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-[11px] px-2.5 py-1 rounded-full bg-primary/10 text-primary font-semibold">{p.category}</span>
                    <h3 className="text-lg font-bold text-foreground mt-3 mb-1">{p.title}</h3>
                    <p className="text-xs text-muted-foreground mb-1">{p.client}</p>
                    <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
                    <div className="mono-text text-xs text-primary font-bold mb-4">{p.impact}</div>
                    <div className="flex gap-2">
                      <a
                        href="tel:+919770034731"
                        className="btn-teal text-xs flex-1 text-center py-2.5"
                      >
                        Call Now
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
