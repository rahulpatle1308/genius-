import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Users, Target, TrendingUp, Briefcase, Award, Lightbulb, Shield, Zap } from "lucide-react";
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
          {/* Info - Centered since photo is removed */}
          <motion.div
            className="lg:col-span-2 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="badge-primary mb-4 mx-auto w-fit">👤 Meet Our Founder</div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-2">
              <span className="teal-gradient-text">Nitin Deswadi</span>
            </h1>
            <p className="text-lg sm:text-xl font-semibold text-muted-foreground mb-4">Founder, Genius Pvt. Ltd.</p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
              A creative visionary and branding expert with over 10 years of experience in design and printing. Nitin believes that every brand has a story, and his mission is to make those stories visible, memorable, and successful through Genius Pvt. Ltd.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
              {[
                { title: "Graphic Design", desc: "Expert in brand identity and visual storytelling." },
                { title: "Print Solutions", desc: "Specialist in offset and digital printing quality." },
                { title: "Brand Strategy", desc: "Strategic thinking for long-term business growth." }
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  className="glass-card p-5 text-center border-t-2 border-primary/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <h3 className="font-bold text-foreground text-sm mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
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

    {/* Core Values */}
    <section className="section-padding bg-gradient-to-t from-accent/20 to-background">
      <div className="container-wide mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold mb-3">Our Core <span className="teal-gradient-text">Values</span></h2>
          <p className="text-muted-foreground">The principles that drive Genius Pvt. Ltd.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Shield, title: "Quality First", desc: "We never compromise on the quality of our design or printing output." },
            { icon: Target, title: "Client Focused", desc: "Your success is our success. We listen, adapt, and deliver exactly what you need." },
            { icon: Zap, title: "Fast Turnaround", desc: "We respect your time and ensure your projects are delivered on schedule." },
            { icon: Users, title: "Creative Synergy", desc: "Our team works together to bring the best creative ideas to the table." }
          ].map((val, i) => (
            <motion.div
              key={val.title}
              className="glass-card p-6 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <val.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{val.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Vision */}
    <section className="section-padding">
      <div className="container-wide mx-auto max-w-3xl">
        <motion.div
          className="glass-card p-6 sm:p-10 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16" />
          <Lightbulb size={32} className="text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-extrabold text-foreground mb-4">Vision & Mission</h2>
          <p className="text-muted-foreground leading-relaxed italic">
            "Our vision is to become one of India’s most trusted creative branding and printing companies. We transform business ideas into visual success stories through innovative design and premium production quality. At Genius Pvt. Ltd., we don't just build brands — we build legacies."
          </p>
          <p className="text-sm text-primary font-bold mt-6">— Nitin Deswadi, Founder</p>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Founder;
