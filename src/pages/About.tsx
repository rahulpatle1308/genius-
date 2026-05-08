import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Lock, Scale, Star, Shield } from "lucide-react";

const values = [
  { icon: Lock, title: "Creative Excellence", desc: "We transform ideas into powerful visual experiences with precision and passion." },
  { icon: Scale, title: "Technical Expertise", desc: "Combining design thinking with high-quality production and strategy." },
  { icon: Star, title: "Fast Delivery", desc: "Timely execution with high-quality output and professional commitment." },
];

const timeline = [
  { period: "2015", event: "Genius Pvt. Ltd. Foundation in Bhopal" },
  { period: "2018", event: "Expanded to Premium Offset Printing" },
  { period: "2020", event: "Launched Digital Branding & Ads Solutions" },
  { period: "2022", event: "Serviced 500+ Local & National Brands" },
  { period: "2026", event: "Leading Branding Partner in Madhya Pradesh" },
];

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="section-padding bg-gradient-to-b from-accent/30 to-background">
      <div className="container-wide mx-auto text-center max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="badge-primary mb-6">🔷 About Genius Pvt. Ltd.</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Building Brands That People <span className="teal-gradient-text">Remember</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            From creative graphic design to premium offset printing, we help businesses grow with impactful design and smart execution.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="section-padding bg-secondary/30">
      <div className="container-wide mx-auto max-w-4xl space-y-8">
        <motion.div
          className="glass-card p-6 sm:p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-extrabold text-foreground mb-6">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            To deliver creative excellence through innovative design, premium printing, and powerful branding solutions that help businesses stand out and grow faster.
          </p>
          <h2 className="text-2xl font-extrabold text-foreground mb-6 mt-10">Our Vision</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            To become one of India’s most trusted creative branding and printing companies by transforming business ideas into visual success stories.
          </p>
          <p className="text-sm text-primary font-semibold italic">— Genius Pvt. Ltd. Team</p>
        </motion.div>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding">
      <div className="container-wide mx-auto">
        <h2 className="text-3xl font-extrabold text-center mb-12">Core <span className="teal-gradient-text">Values</span></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              className="glass-card-hover p-6 text-center"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
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
    <section className="section-padding bg-secondary/30">
      <div className="container-wide mx-auto max-w-2xl">
        <h2 className="text-3xl font-extrabold text-center mb-12">Our <span className="teal-gradient-text">Journey</span></h2>
        <div className="space-y-4 sm:space-y-6">
          {timeline.map((t, i) => (
            <motion.div
              key={t.period}
              className="flex gap-4 sm:gap-6 items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <div className="shrink-0 w-20 sm:w-24 mono-text text-sm font-bold text-primary">{t.period}</div>
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-6">
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
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default About;
