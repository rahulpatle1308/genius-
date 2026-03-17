import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, MapPin, Send } from "lucide-react";
import { useState } from "react";

const contactMethods = [
  { icon: Phone, title: "Phone", lines: ["+91 74897 41225", "Mon-Sat: 8AM-8PM", "Emergency: 24/7"], href: "tel:+917489741225" },
  { icon: Mail, title: "Email", lines: ["engproof25@gmail.com", "Response within 24 hours"], href: "mailto:engproof25@gmail.com" },
  { icon: MessageCircle, title: "WhatsApp", lines: ["Chat instantly", "Book services directly", "Quick quotes"], href: "https://wa.me/917489741225" },
];

const serviceOptions = ["Website Development", "Mobile App Development", "CCTV & Security", "Digital ID Cards", "Event Management", "Other"];
const budgetOptions = ["Under ₹25,000", "₹25,000 - ₹50,000", "₹50,000 - ₹1,00,000", "₹1,00,000+", "Not sure"];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
              Get in <span className="teal-gradient-text">Touch</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground">We're here to help with your technology and security needs</p>
          </motion.div>

          {/* Contact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 mb-16">
            {contactMethods.map((m, i) => (
              <motion.a
                key={m.title}
                href={m.href}
                target={m.title === "WhatsApp" ? "_blank" : undefined}
                rel={m.title === "WhatsApp" ? "noopener noreferrer" : undefined}
                className="glass-card-hover p-6 text-center block"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <m.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{m.title}</h3>
                {m.lines.map((l) => (
                  <p key={l} className="text-sm text-muted-foreground">{l}</p>
                ))}
              </motion.a>
            ))}
          </div>

          {/* Form */}
          <div className="max-w-2xl mx-auto">
            <motion.div
              className="glass-card p-6 sm:p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {submitted ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-4">
                    <Send size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Thank You!</h3>
                  <p className="text-muted-foreground text-sm">We'll contact you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="text" placeholder="Full Name *" required className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" />
                    <input type="text" placeholder="Company Name" className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="email" placeholder="Email Address *" required className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" />
                    <input type="tel" placeholder="Phone Number *" required className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <select required defaultValue="" className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow">
                      <option value="" disabled>Service Interest *</option>
                      {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                    <select defaultValue="" className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow">
                      <option value="" disabled>Budget Range</option>
                      {budgetOptions.map((b) => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>
                  <textarea placeholder="Your Message *" required rows={4} className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none transition-shadow" />
                  <button type="submit" className="btn-teal w-full flex items-center justify-center gap-2">
                    <Send size={16} /> Send Message
                  </button>
                </form>
              )}
            </motion.div>

            {/* Map */}
            <motion.div
              className="mt-8 glass-card p-4 sm:p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-center gap-2 text-muted-foreground mb-2">
                <MapPin size={16} className="text-primary" />
                <span className="text-sm">Indore, Madhya Pradesh, India</span>
              </div>
              <div className="rounded-xl overflow-hidden h-48 sm:h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.74672498008!2d75.69835529999999!3d22.72370845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1679000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ENGPROOF Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
