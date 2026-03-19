import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import projectWeb from "@/assets/project-website.jpg";
import projectApp from "@/assets/project-app.jpg";
import projectCctv from "@/assets/project-cctv.jpg";
import projectId from "@/assets/project-idcard.jpg";
import projectEvent from "@/assets/project-event.jpg";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Website Development",
    client: "TechStart Solutions",
    desc: "Full-featured online store with payment gateway, inventory management, and admin dashboard.",
    impact: "200% increase in online sales",
    image: projectWeb,
  },
  {
    title: "Business Mobile App",
    category: "Mobile App Development",
    client: "GreenMart Organics",
    desc: "Cross-platform shopping app with real-time delivery tracking and push notifications.",
    impact: "5,000+ downloads in first month",
    image: projectApp,
  },
  {
    title: "Office Security System",
    category: "CCTV & Security",
    client: "SecureHome Properties",
    desc: "32-camera surveillance with remote monitoring, night vision, and cloud backup.",
    impact: "Zero security incidents in 6 months",
    image: projectCctv,
  },
  {
    title: "Smart ID Card System",
    category: "Digital ID Cards",
    client: "EduFirst Academy",
    desc: "QR-based smart ID cards for 500+ students with automated attendance tracking.",
    impact: "90% faster attendance process",
    image: projectId,
  },
  {
    title: "Annual Tech Conference",
    category: "Event Management",
    client: "InnoTech Corp",
    desc: "Complete event management for 300+ attendees with live streaming and registration.",
    impact: "98% attendee satisfaction",
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
                        href={`https://wa.me/917489741225?text=${encodeURIComponent(`Hi ENGPROOF, I saw your ${p.title} project. I'm interested in similar work.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-teal text-xs inline-flex items-center gap-2"
                      >
                        <ExternalLink size={14} /> Get Similar Project
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
