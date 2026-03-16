import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { useState } from "react";

const categories = ["All", "Websites", "Apps", "CCTV", "ID Cards", "Events"];

const projects = [
  { title: "TechStart E-commerce Platform", category: "Websites", client: "TechStart Solutions", desc: "Full e-commerce website with payment integration and inventory management.", impact: "200% increase in online sales" },
  { title: "SecureHome Surveillance System", category: "CCTV", client: "SecureHome Properties", desc: "32-camera office security system with remote monitoring.", impact: "Zero security incidents in 6 months" },
  { title: "EduFirst Smart ID System", category: "ID Cards", client: "EduFirst Academy", desc: "QR-based smart ID cards for 500+ students with attendance tracking.", impact: "90% faster attendance process" },
  { title: "GreenMart Shopping App", category: "Apps", client: "GreenMart Organics", desc: "Cross-platform shopping app with delivery tracking.", impact: "5,000+ downloads in first month" },
  { title: "InnoTech Annual Conference", category: "Events", client: "InnoTech Corp", desc: "Full event management for 300+ attendees with live streaming.", impact: "98% attendee satisfaction" },
  { title: "LegalPro Corporate Website", category: "Websites", client: "LegalPro Associates", desc: "Multi-page corporate website with blog and client portal.", impact: "150% increase in lead generation" },
];

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Our <span className="teal-gradient-text">Success Stories</span>
            </h1>
            <p className="text-lg text-muted-foreground">Real projects, real results</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === c ? "btn-teal" : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <motion.div
                key={p.title}
                className="glass-card-hover p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="h-40 rounded-xl bg-secondary/50 mb-4 flex items-center justify-center">
                  <span className="text-3xl">📂</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">{p.category}</span>
                <h3 className="text-base font-bold text-foreground mt-2 mb-1">{p.title}</h3>
                <p className="text-xs text-muted-foreground mb-1">{p.client}</p>
                <p className="text-sm text-muted-foreground mb-3">{p.desc}</p>
                <div className="mono-text text-xs text-primary font-bold">{p.impact}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
