import Layout from "@/components/layout/Layout";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";

const digitalServices = [
  { name: "Social Media Management", desc: "Grow your presence on FB, Insta, and LinkedIn.", features: ["Daily posts", "Engagement", "Brand building"], tech: "Content Strategy", timeline: "Monthly", price: "Starting ₹8,000/mo" },
  { name: "Facebook & Instagram Ads", desc: "Targeted ad campaigns to generate leads.", features: ["Audience targeting", "Creative ads", "Performance tracking"], tech: "Meta Ads Manager", timeline: "Monthly", price: "Custom Budget" },
  { name: "Google Business Optimization", desc: "Improve your ranking on Google Maps.", features: ["Local SEO", "Review management", "Keyword ranking"], tech: "GMB / GBP", timeline: "Ongoing", price: "Starting ₹3,000/mo" },
  { name: "Performance Marketing", desc: "Data-driven ads for direct ROI.", features: ["Conversion tracking", "Retargeting", "ROI focused"], tech: "Ads / Analytics", timeline: "Monthly", price: "Custom Quote" },
];

const faqs = [
  { q: "Do you guarantee results?", a: "While we can't guarantee sales, we guarantee quality traffic and higher engagement based on data." },
  { q: "Is monthly management required?", a: "Digital marketing is most effective when done consistently over time." },
];

const DigitalMarketing = () => (
  <Layout>
    <ServiceDetailPage
      emoji="🌐"
      title="Digital Marketing"
      subtitle="Modern digital solutions to grow your online presence"
      stats={["Social Growth", "Lead Generation", "Brand ROI"]}
      services={digitalServices}
      faqs={faqs}
      whatsappPrefix="Digital Marketing"
    />
  </Layout>
);

export default DigitalMarketing;
