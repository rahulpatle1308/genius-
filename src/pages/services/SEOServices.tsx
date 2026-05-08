import Layout from "@/components/layout/Layout";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";

const seoServices = [
  { name: "On-Page SEO", desc: "Optimizing website content and structure.", features: ["Meta tags", "Keyword optimization", "Image alt tags"], tech: "HTML / CMS", timeline: "Ongoing", price: "Custom Quote" },
  { name: "Off-Page SEO", desc: "Building high-quality backlinks and authority.", features: ["Guest posts", "Link building", "Brand mentions"], tech: "Backlinking", timeline: "Monthly", price: "Custom Quote" },
  { name: "Local SEO", desc: "Rank higher in local search results.", features: ["GMB optimization", "Local keywords", "Directory listing"], tech: "Google Business", timeline: "Monthly", price: "Starting ₹5,000/mo" },
  { name: "Technical SEO", desc: "Improving site speed and crawlability.", features: ["Site audit", "XML sitemap", "Robots.txt"], tech: "Technical Audit", timeline: "Monthly", price: "Custom Quote" },
];

const faqs = [
  { q: "How long to see SEO results?", a: "SEO is a long-term process, usually taking 3-6 months for significant ranking improvements." },
  { q: "Do you provide reports?", a: "Yes, we provide monthly progress and ranking reports." },
];

const SEOServices = () => (
  <Layout>
    <ServiceDetailPage
      emoji="🔍"
      title="SEO Services"
      subtitle="Improve your visibility and rankings on Google"
      stats={["Organic Growth", "Higher Rankings", "Lead Generation"]}
      services={seoServices}
      faqs={faqs}
      whatsappPrefix="SEO Services"
    />
  </Layout>
);

export default SEOServices;
