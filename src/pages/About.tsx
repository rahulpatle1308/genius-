import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Lock, Scale, Star, Shield } from "lucide-react";

const values = [
  { icon: Lock, title: "Confidentiality First", desc: "All client information protected by NDAs. Your data never leaves our secure systems." },
  { icon: Scale, title: "Uncompromising Integrity", desc: "Transparent pricing, no hidden costs. What we quote is what you pay." },
  { icon: Star, title: "24/7 Availability", desc: "Round-the-clock emergency support for all our security and technology clients." },
];

const timeline = [
  { period: "2025", event: "ENGPROOF Established in Indore" },
  { period: "2025 Q2", event: "First 10 Business Clients Onboarded" },
  { period: "2025 Q3", event: "Expanded to CCTV Security Services" },
  { period: "2025 Q4", event: "50+ Projects Completed" },
  { period: "2026", event: "Serving Clients Across India" },
];

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="section-padding">
      <div className="container-wide mx-auto text-center max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="badge-primary mb-6">🔷 About ENGPROOF</div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Securing & Digitizing <span className="teal-gradient-text">Indian Businesses</span> Since 2025
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We combine enterprise-grade technology with personalized service to deliver complete solutions under one roof.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Mission */}
    <section className="section-padding bg-secondary/10">
      <div className="container-wide mx-auto max-w-4xl">
        <div className="glass-card p-8 md:p-12">
          <h2 className="text-2xl font-extrabold text-foreground mb-6">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            ENGPROOF was founded in Indore, Madhya Pradesh with a simple vision: businesses shouldn't have to coordinate with multiple vendors for their technology and security needs. We provide comprehensive digital and physical security solutions with unwavering commitment to confidentiality, integrity, and availability.
          </p>
          <p className="text-sm text-primary font-semibold italic">— ENGPROOF Team</p>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding">
      <div className="container-wide mx-auto">
        <h2 className="text-3xl font-extrabold text-center mb-12">Core <span className="teal-gradient-text">Values</span></h2>
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              className="glass-card-hover p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <v.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="section-padding bg-secondary/10">
      <div className="container-wide mx-auto max-w-2xl">
        <h2 className="text-3xl font-extrabold text-center mb-12">Our <span className="teal-gradient-text">Journey</span></h2>
        <div className="space-y-6">
          {timeline.map((t, i) => (
            <motion.div
              key={t.period}
              className="flex gap-6 items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="shrink-0 w-24 mono-text text-sm font-bold text-primary">{t.period}</div>
              <div className="flex-1 glass-card p-4">
                <p className="text-sm text-foreground">{t.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Legal */}
    <section className="section-padding">
      <div className="container-wide mx-auto max-w-3xl text-center">
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <div className="badge-primary flex items-center gap-2">
            <Shield size={14} /> Compliant with Indian IT Act 2000
          </div>
          <div className="badge-primary flex items-center gap-2">
            <Shield size={14} /> GDPR Ready for International Clients
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          We maintain enterprise-grade data protection standards and regular security audits.
        </p>
      </div>
    </section>
  </Layout>
);

export default About;
