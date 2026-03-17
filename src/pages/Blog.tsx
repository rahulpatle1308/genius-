import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";

const posts = [
  { title: "Website Security Best Practices for Indian SMEs", category: "Web Development", date: "Mar 10, 2026", read: "5 min", excerpt: "Essential security measures every business website should implement to protect against modern threats." },
  { title: "Complete CCTV Placement Guide for Office Spaces", category: "Security Tips", date: "Mar 5, 2026", read: "7 min", excerpt: "Strategic camera placement tips to maximize coverage and minimize blind spots in your office." },
  { title: "QR ID Cards vs Traditional: Which Is Right for You?", category: "ID Card Technology", date: "Feb 28, 2026", read: "4 min", excerpt: "A detailed comparison of smart QR ID cards versus traditional printed cards for organizations." },
  { title: "Corporate Event Checklist: Planning Made Simple", category: "Event Planning", date: "Feb 20, 2026", read: "6 min", excerpt: "Your complete checklist for planning a successful corporate event from venue to technical setup." },
  { title: "Why Your Business Needs a Mobile App in 2026", category: "App Development", date: "Feb 15, 2026", read: "5 min", excerpt: "How mobile apps are driving business growth and customer engagement in the Indian market." },
  { title: "Choosing the Right E-commerce Platform", category: "Web Development", date: "Feb 10, 2026", read: "8 min", excerpt: "WooCommerce vs Shopify vs Custom: finding the perfect platform for your online store." },
];

const Blog = () => (
  <Layout>
    <section className="section-padding">
      <div className="container-wide mx-auto">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
            <span className="teal-gradient-text">Tech Insights</span> & Resources
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground">Stay updated with latest in technology and security</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <motion.article
              key={p.title}
              className="glass-card-hover p-5 sm:p-6 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <div className="h-28 sm:h-36 rounded-xl bg-secondary/50 mb-4 flex items-center justify-center">
                <span className="text-3xl">📝</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium self-start mb-2">{p.category}</span>
              <h3 className="text-base font-bold text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground flex-1 mb-3">{p.excerpt}</p>
              <div className="flex justify-between items-center text-xs text-muted-foreground mono-text">
                <span>{p.date}</span>
                <span>{p.read} read</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Blog;
