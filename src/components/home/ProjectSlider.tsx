import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Phone } from "lucide-react";
import projectWeb from "@/assets/project-website.jpg";
import projectApp from "@/assets/project-app.jpg";
import projectCctv from "@/assets/project-cctv.jpg";
import projectId from "@/assets/project-idcard.jpg";
import projectEvent from "@/assets/project-event.jpg";

const projects = [
  {
    title: "EcoFriendly Brand Identity",
    category: "Branding",
    client: "EcoFriendly Organics",
    desc: "Complete logo and brand guide with sustainable packaging design and marketing collaterals.",
    impact: "Successfully launched in 10 cities",
    image: projectWeb,
  },
  {
    title: "Corporate Product Catalogues",
    category: "Offset Printing",
    client: "InnoTech Corp",
    desc: "1000+ luxury brochures with spot UV, matte finish, and custom die-cutting.",
    impact: "Zero printing errors in bulk order",
    image: projectCctv,
  },
  {
    title: "Smart City LED Signage",
    category: "LED Sign Boards",
    client: "Municipal Corp",
    desc: "Durable ACP LED boards across major city squares with high visibility.",
    impact: "High visibility & Energy efficient",
    image: projectId,
  },
  {
    title: "Global Reach Digital Ads",
    category: "Digital Marketing",
    client: "Global Solutions",
    desc: "Full performance marketing, social media management, and SEO for international growth.",
    impact: "50% increase in lead generation",
    image: projectApp,
  },
  {
    title: "Heritage Event Branding",
    category: "Branding & Print",
    client: "Heritage Foundation",
    desc: "End-to-end branding for a 3-day cultural festival including banners, stalls, and passes.",
    impact: "Attracted 10,000+ visitors",
    image: projectEvent,
  },
];

const ProjectSlider = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const navigate = (dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + projects.length) % projects.length);
  };

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  const p = projects[current];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-foreground">
            Our <span className="teal-gradient-text text-glow">Completed Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Real work, real results — see what we've built
          </p>
        </motion.div>

        <div className="relative">
          <div className="glass-card overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image Side */}
              <div className="relative h-64 sm:h-80 lg:h-[420px] overflow-hidden">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.img
                    key={current}
                    src={p.image}
                    alt={p.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-semibold">
                    {p.category}
                  </span>
                </div>
              </div>

              {/* Content Side */}
              <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-2">
                      {p.client}
                    </p>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                      {p.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                      {p.desc}
                    </p>
                    <div className="glass-card px-4 py-3 inline-flex items-center gap-2 mb-6">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      <span className="mono-text text-sm font-bold text-primary">{p.impact}</span>
                    </div>
                    <div className="flex gap-3">
                      <a
                        href="tel:+919770034731"
                        className="btn-teal text-xs inline-flex items-center gap-2"
                      >
                        <Phone size={14} /> Call for Details
                      </a>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Nav Buttons */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={() => navigate(-1)}
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "w-8 bg-primary" : "w-2 bg-border hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => navigate(1)}
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSlider;
