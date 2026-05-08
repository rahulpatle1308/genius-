import Layout from "@/components/layout/Layout";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";

const creativeServices = [
  {
    name: "Logo Design",
    desc: "Create a unique and memorable brand identity with professional logo design.",
    features: ["Multiple concepts", "Vector files (AI, EPS)", "Brand style guide", "High resolution", "Transparent backgrounds"],
    tech: "Adobe Illustrator, Photoshop, Figma",
    timeline: "3-5 days",
    price: "Custom Quote",
  },
  {
    name: "Brand Identity Design",
    desc: "Complete branding package including letterheads, envelopes, and more.",
    features: ["Business cards", "Letterheads", "Envelopes", "Folder design", "Brand guidelines"],
    tech: "Adobe Suite",
    timeline: "7-10 days",
    price: "Custom Quote",
  },
  {
    name: "Brochures & Catalogues",
    desc: "Professional print-ready designs for your products and services.",
    features: ["Tri-fold/Bi-fold", "Product catalogs", "Company profiles", "High-quality layouts"],
    tech: "Adobe InDesign",
    timeline: "5-10 days",
    price: "Custom Quote",
  },
  {
    name: "Social Media Creatives",
    desc: "Engaging designs for Facebook, Instagram, LinkedIn, and more.",
    features: ["Posters", "Banners", "Ad creatives", "Thumbnails", "Cover photos"],
    tech: "Adobe Photoshop, Canva",
    timeline: "1-2 days",
    price: "Starting ₹500",
  },
  {
    name: "Packaging Design",
    desc: "Attractive and functional packaging for your products.",
    features: ["Box design", "Label design", "Pouch design", "3D mockups"],
    tech: "Adobe Illustrator",
    timeline: "10-15 days",
    price: "Custom Quote",
  },
];

const faqs = [
  { q: "What files will I receive?", a: "You will receive all necessary formats including AI, EPS, PDF, JPG, and PNG (transparent)." },
  { q: "How many revisions do I get?", a: "We typically offer 3-5 rounds of revisions to ensure you are 100% satisfied." },
  { q: "Can you design for social media?", a: "Yes, we create platform-optimized designs for all social media channels." },
  { q: "Do you provide printing services too?", a: "Yes, as Genius Pvt. Ltd., we handle both design and high-quality printing." },
];

const CreativeDesigning = () => (
  <Layout>
    <ServiceDetailPage
      emoji="🎨"
      title="Creative Designing"
      subtitle="Creative Thinking Made Visual"
      stats={["1000+ Logos Designed", "500+ Brands Built", "100% Satisfaction"]}
      services={creativeServices}
      faqs={faqs}
      whatsappPrefix="Creative Designing"
    />
  </Layout>
);

export default CreativeDesigning;
