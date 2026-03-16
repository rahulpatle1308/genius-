import { motion } from "framer-motion";
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
      <section className="section-padding">
        <div className="container-wide mx-auto text-center max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="text-5xl mb-4">{emoji}</div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Professional <span className="teal-gradient-text">{title}</span> Services
            </h1>
            <p className="text-lg text-muted-foreground">{subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-12">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            {stats.map((s, i) => (
              <motion.div
                key={s}
                className="glass-card p-4 text-center"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="text-sm font-bold text-foreground">{s}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-secondary/10">
        <div className="container-wide mx-auto">
          <div className="space-y-6">
            {services.map((s, i) => (
              <motion.div
                key={s.name}
                className="glass-card p-6 md:p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-extrabold text-foreground mb-2">{s.name}</h3>
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
                  <div className="shrink-0 text-right space-y-2 min-w-[160px]">
                    <div className="mono-text text-lg font-bold text-primary">{s.price}</div>
                    <div className="text-xs text-muted-foreground">Timeline: {s.timeline}</div>
                    <a
                      href={`https://wa.me/917489741225?text=${encodeURIComponent(`Hi ENGPROOF, I'm interested in ${s.name} (${whatsappPrefix}). Can we discuss?`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="whatsapp-btn text-xs inline-flex"
                    >
                      {emoji} Book Now
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
          <h2 className="text-3xl font-extrabold text-center mb-10">
            Frequently Asked <span className="teal-gradient-text">Questions</span>
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="glass-card overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                >
                  <span className="text-sm font-bold text-foreground">{faq.q}</span>
                  <ChevronDown
                    size={16}
                    className={`text-muted-foreground shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-sm text-muted-foreground">{faq.a}</p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailPage;
