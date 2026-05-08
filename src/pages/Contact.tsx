import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, MapPin, Send } from "lucide-react";
import { useState } from "react";

const contactMethods = [
  { icon: Phone, title: "Phone", lines: ["+91 97700 34731", "Mon-Sat: 10AM-8PM", "Bhopal, MP"], href: "tel:+919770034731" },
  { icon: Mail, title: "Email", lines: ["nitin.deswadi@gmail.com", "Response within 24 hours"], href: "mailto:nitin.deswadi@gmail.com" },
  { icon: MessageCircle, title: "WhatsApp", lines: ["Chat instantly", "Book services directly", "Quick quotes"], href: "https://wa.me/919770034731" },
];

const serviceOptions = ["Creative Designing", "Offset Printing", "Flex Printing", "Advertising Solutions", "Digital Marketing", "LED Boards", "Other"];
const budgetOptions = ["Under ₹5,000", "₹5,000 - ₹20,000", "₹20,000 - ₹50,000", "₹50,000+", "Not sure"];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi Genius Pvt. Ltd.,\n\nName: ${formData.name}\nCompany: ${formData.company || "N/A"}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\nBudget: ${formData.budget || "N/A"}\n\nMessage:\n${formData.message}`;
    window.open(`https://wa.me/919770034731?text=${encodeURIComponent(msg)}`, "_blank");
  };

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
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="Full Name *" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" />
                  <input type="text" placeholder="Company Name" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="email" placeholder="Email Address *" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" />
                  <input type="tel" placeholder="Phone Number *" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <select required value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow">
                    <option value="" disabled>Service Interest *</option>
                    {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <select value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow">
                    <option value="" disabled>Budget Range</option>
                    {budgetOptions.map((b) => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>
                <textarea placeholder="Your Message *" required rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none transition-shadow" />
                <button type="submit" className="whatsapp-btn w-full flex items-center justify-center gap-2 text-sm py-3">
                  <MessageCircle size={18} /> Send via WhatsApp
                </button>
              </form>
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
                <span className="text-sm">184 LIG B Sector Rajeev Nagar Bhopal, MP</span>
              </div>
              <div className="rounded-xl overflow-hidden h-48 sm:h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.216347012345!2d77.41!3d23.26!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c428f8fd68fbd%3A0x2155716d572d4f8!2sRajeev%20Nagar%2C%20Bhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1679000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Genius Pvt. Ltd. Location"
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
