import Layout from "@/components/layout/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Phone } from "lucide-react";
import projectWeb from "@/assets/project-website.jpg";
import projectApp from "@/assets/project-app.jpg";
import projectCctv from "@/assets/project-cctv.jpg";
import projectId from "@/assets/project-idcard.jpg";
import projectEvent from "@/assets/project-event.jpg";

const categories = ["All", "Websites", "Apps", "CCTV", "ID Cards", "Events"];

const projects = [
  { title: "TechStart E-commerce Platform", category: "Websites", client: "TechStart Solutions", desc: "Full e-commerce website with payment integration and inventory management.", impact: "200% increase in online sales", image: projectWeb },
  { title: "SecureHome Surveillance System", category: "CCTV", client: "SecureHome Properties", desc: "32-camera office security system with remote monitoring.", impact: "Zero security incidents in 6 months", image: projectCctv },
  { title: "EduFirst Smart ID System", category: "ID Cards", client: "EduFirst Academy", desc: "QR-based smart ID cards for 500+ students with attendance tracking.", impact: "90% faster attendance process", image: projectId },
  { title: "GreenMart Shopping App", category: "Apps", client: "GreenMart Organics", desc: "Cross-platform shopping app with delivery tracking.", impact: "5,000+ downloads in first month", image: projectApp },
  { title: "InnoTech Annual Conference", category: "Events", client: "InnoTech Corp", desc: "Full event management for 300+ attendees with live streaming.", impact: "98% attendee satisfaction", image: projectEvent },
  { title: "LegalPro Corporate Website", category: "Websites", client: "LegalPro Associates", desc: "Multi-page corporate website with blog and client portal.", impact: "150% increase in lead generation", image: projectWeb },
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
                        href={`https://wa.me/917489741225?text=${encodeURIComponent(`Hi ENGPROOF, I saw your ${p.title} project. I'm interested in similar work.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-teal text-xs flex-1 text-center"
                      >
                        Get Similar
                      </a>
                      <a
                        href="tel:+917489741225"
                        className="flex items-center justify-center w-10 h-10 rounded-xl border border-border text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
                      >
                        <Phone size={16} />
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
