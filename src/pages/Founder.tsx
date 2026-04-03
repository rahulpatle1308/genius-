import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Users, Target, TrendingUp, Briefcase, Award, Lightbulb } from "lucide-react";
import founderImg from "@/assets/founder.png";

const experiences = [
  {
    icon: Users,
    title: "Team Leader",
    duration: "3 Years",
    desc: "Successfully managed teams, improved productivity, and delivered impactful results across multiple projects.",
  },
  {
    icon: Briefcase,
    title: "Project Manager",
    duration: "6 Months",
    desc: "Handled planning, execution, and ensured timely project delivery with quality standards.",
  },
  {
    icon: TrendingUp,
    title: "Marketing Expert",
    duration: "2 Years",
    desc: "Focused on brand growth, strategy development, and customer engagement for business expansion.",
  },
];

const Founder = () => (
  <Layout>
    {/* Hero */}
    <section className="section-padding bg-gradient-to-b from-accent/30 to-background">
      <div className="container-wide mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-5xl mx-auto">
          {/* Photo */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img
                  src={founderImg}
                  alt="Founder of ENGPROOF"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <motion.div
                className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-5 py-2.5 rounded-2xl font-bold text-sm shadow-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <Award size={16} className="inline mr-1.5 -mt-0.5" />
                Founder
              </motion.div>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="badge-primary mb-4">👤 Meet Our Founder</div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-2">
              <span className="teal-gradient-text">Chetan Patle</span>
            </h1>
            <p className="text-lg sm:text-xl font-semibold text-muted-foreground mb-4">Founder, ENGPROOF</p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
              A dedicated and visionary leader with strong experience in team management, marketing, and project execution. Passionate about building innovative solutions and leading teams toward success.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-xl text-sm font-semibold">
                <Target size={16} /> 3+ Years Leadership
              </div>
              <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-xl text-sm font-semibold">
                <Lightbulb size={16} /> Innovation Driven
              </div>
              <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-xl text-sm font-semibold">
                <Award size={16} /> Engineering Graduate
              </div>
            </div>
            <div className="mt-5 p-4 rounded-2xl bg-secondary/50 border border-border">
              <h3 className="font-bold text-foreground text-sm mb-2">🎓 Education & Expertise</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• <span className="font-semibold text-foreground">Engineering</span> — Technical Foundation</li>
                <li>• <span className="font-semibold text-foreground">Marketing</span> — Brand & Growth Strategy</li>
                <li>• <span className="font-semibold text-foreground">Education</span> — Continuous Learning & Development</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Experience */}
    <section className="section-padding bg-secondary/30">
      <div className="container-wide mx-auto max-w-4xl">
        <h2 className="text-3xl font-extrabold text-center mb-12">
          Professional <span className="teal-gradient-text">Experience</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              className="glass-card-hover p-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <exp.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-bold text-foreground text-lg mb-1">{exp.title}</h3>
              <span className="text-primary font-semibold text-sm">{exp.duration}</span>
              <p className="text-sm text-muted-foreground mt-3">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Vision */}
    <section className="section-padding">
      <div className="container-wide mx-auto max-w-3xl">
        <motion.div
          className="glass-card p-6 sm:p-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Lightbulb size={32} className="text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-extrabold text-foreground mb-4">Vision & Mission</h2>
          <p className="text-muted-foreground leading-relaxed">
            "Our vision is to empower businesses across India with cutting-edge technology and security solutions. We believe every business, regardless of size, deserves enterprise-grade protection and digital transformation. At ENGPROOF, we don't just deliver projects — we build lasting partnerships."
          </p>
          <p className="text-sm text-primary font-semibold italic mt-4">— Founder, ENGPROOF</p>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Founder;
