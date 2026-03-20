import Layout from "@/components/layout/Layout";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";

const websiteServices = [
  {
    name: "Static Website",
    desc: "Fast, secure, professional static sites ideal for startups and small businesses.",
    features: ["5-10 pages", "Contact form", "Google Maps integration", "Social media links", "SEO optimized"],
    tech: "HTML5, CSS3, JavaScript, React (optional)",
    timeline: "5-7 days",
    price: "Starting ₹15,000",
  },
  {
    name: "Dynamic Website",
    desc: "Database-driven websites with admin panels and CMS.",
    features: ["Admin dashboard", "Content management", "User login", "Blog system", "Database integration"],
    tech: "PHP/MySQL, Node.js, Python Django",
    timeline: "15-20 days",
    price: "Starting ₹1,00,000",
  },
  {
    name: "E-commerce Website",
    desc: "Complete online store with payment integration.",
    features: ["Product catalog", "Shopping cart", "Payment gateway", "Order tracking", "Customer accounts"],
    tech: "WooCommerce, Shopify, Custom PHP",
    timeline: "20-30 days",
    price: "Starting ₹1,50,000",
  },
  {
    name: "Corporate Website",
    desc: "Enterprise-grade secure websites for large organizations.",
    features: ["Multi-language", "Scalable architecture", "Advanced security", "Custom design", "Analytics"],
    tech: "React, Next.js, Enterprise CMS",
    timeline: "25-40 days",
    price: "Custom Quote",
  },
  {
    name: "Custom Web App",
    desc: "Advanced web systems like CRM, ERP, Automation tools.",
    features: ["Custom functionality", "API integrations", "Secure backend", "Role-based access", "Reporting"],
    tech: "React, Node.js, Python, Cloud Infrastructure",
    timeline: "30-60 days",
    price: "Custom Quote",
  },
];

const faqs = [
  { q: "How long does it take to build a website?", a: "Depending on complexity, from 5 days for a static site to 60 days for a custom web application." },
  { q: "Do you provide hosting?", a: "Yes, we can set up and manage hosting on reliable cloud platforms." },
  { q: "Will my website be mobile-friendly?", a: "Absolutely. All our websites are fully responsive and optimized for all devices." },
  { q: "Do you offer maintenance after launch?", a: "Yes, we provide 24/7 support and maintenance packages for all websites." },
  { q: "Can I update content myself?", a: "Dynamic websites come with an admin panel where you can manage all content." },
];

const WebsiteDevelopment = () => (
  <Layout>
    <ServiceDetailPage
      emoji="📘"
      title="Website Development"
      subtitle="From simple static sites to complex web applications"
      stats={["50+ Websites Launched", "100% Client Satisfaction", "SEO Optimized"]}
      services={websiteServices}
      faqs={faqs}
      whatsappPrefix="Website Development"
    />
  </Layout>
);

export default WebsiteDevelopment;
