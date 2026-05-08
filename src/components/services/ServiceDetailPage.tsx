import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface ServiceItem {
  name: string;
  desc: string;
  features: string[];
  tech?: string;
  timeline: string;
  price: string;
}

interface FAQ {
  q: string;
  a: string;
}

interface Props {
  emoji: string;
  title: string;
  subtitle: string;
  stats: string[];
  services: ServiceItem[];
  faqs: FAQ[];
  whatsappPrefix: string;
}

const ServiceDetailPage = ({ emoji, title, subtitle, stats, services, faqs, whatsappPrefix }: Props) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-accent/30 to-background">
        <div className="container-wide mx-auto text-center max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="text-4xl sm:text-5xl mb-4">{emoji}</div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
              Professional <span className="teal-gradient-text">{title}</span> Services
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground">{subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-12">
        <div className="container-wide mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {stats.map((s, i) => (
              <motion.div
                key={s}
                className="glass-card p-4 text-center"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <span className="text-sm font-bold text-foreground">{s}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide mx-auto">
          <div className="space-y-5 sm:space-y-6">
            {services.map((s, i) => (
              <motion.div
                key={s.name}
                className="glass-card p-5 sm:p-6 md:p-8"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5 sm:gap-6">
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-extrabold text-foreground mb-2">{s.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {s.features.map((f) => (
                        <span key={f} className="text-[10px] px-2.5 py-1 rounded-full bg-secondary text-muted-foreground">{f}</span>
                      ))}
                    </div>
                    {s.tech && (
                      <p className="text-xs text-muted-foreground">
                        <span className="mono-text text-primary">Tech:</span> {s.tech}
                      </p>
                    )}
                  </div>
                  <div className="shrink-0 md:text-right space-y-2 md:min-w-[160px]">
                    <div className="mono-text text-lg font-bold text-primary">{s.price}</div>
                    <div className="text-xs text-muted-foreground">Timeline: {s.timeline}</div>
                    <a
                      href="tel:+919770034731"
                      className="btn-teal text-xs inline-flex py-2.5"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-wide mx-auto max-w-3xl">
          <motion.h2
            className="text-2xl sm:text-3xl font-extrabold text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Frequently Asked <span className="teal-gradient-text">Questions</span>
          </motion.h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className="glass-card overflow-hidden"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 sm:px-6 py-4 text-left"
                >
                  <span className="text-sm font-bold text-foreground pr-4">{faq.q}</span>
                  <ChevronDown
                    size={16}
                    className={`text-muted-foreground shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 sm:px-6 pb-4"
                    >
                      <p className="text-sm text-muted-foreground">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailPage;
