import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle } from "lucide-react";

const serviceOptions = [
  "Website Development",
  "Mobile App Development",
  "CCTV & Security",
  "Digital ID Cards",
  "Event Management",
  "Other",
];

const ContactPreview = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="section-padding">
      <div className="container-wide mx-auto">
        <div className="glass-card p-8 md:p-12 max-w-3xl mx-auto">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
              Ready to <span className="teal-gradient-text">Secure & Grow</span> Your Business?
            </h2>
            <p className="text-muted-foreground">Get a free consultation within 24 hours</p>
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Send size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Consultation Scheduled!</h3>
              <p className="text-muted-foreground text-sm">Our team will call you within 24 hours.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full px-4 py-3 rounded-xl bg-input border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                className="w-full px-4 py-3 rounded-xl bg-input border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full px-4 py-3 rounded-xl bg-input border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <select
                required
                className="w-full px-4 py-3 rounded-xl bg-input border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                defaultValue=""
              >
                <option value="" disabled>Service Interest</option>
                {serviceOptions.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              <div className="sm:col-span-2">
                <button type="submit" className="btn-teal w-full flex items-center justify-center gap-2">
                  <Send size={16} /> Request Callback
                </button>
              </div>
              <div className="sm:col-span-2 text-center">
                <a
                  href="https://wa.me/917489741225"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <MessageCircle size={14} />
                  Or WhatsApp us directly: +91 74897 41225
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactPreview;
