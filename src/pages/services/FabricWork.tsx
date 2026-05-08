import Layout from "@/components/layout/Layout";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";

const fabricServices = [
  { name: "T-Shirt Printing", desc: "Customized t-shirts for branding and events.", features: ["Sublimation", "Screen printing", "Vinyl press"], tech: "Fabric Printing", timeline: "3-5 days", price: "Starting ₹150" },
  { name: "Uniform Branding", desc: "Professional corporate and school uniform branding.", features: ["Embroidery", "Durable prints", "Bulk quantity"], tech: "Uniform Solutions", timeline: "7-10 days", price: "Custom Quote" },
  { name: "Promotional Fabric Printing", desc: "Banners and flags made of durable fabric.", features: ["Satin fabric", "Cotton blends", "Flag printing"], tech: "Direct to Fabric", timeline: "3-5 days", price: "Custom Quote" },
  { name: "Corporate Merchandise", desc: "Branded caps, bags, and other fabric items.", features: ["Custom gifts", "Promotional bags", "Event swag"], tech: "Merchandise", timeline: "5-10 days", price: "Custom Quote" },
];

const faqs = [
  { q: "Is the print permanent?", a: "Yes, our high-quality printing ensures the colors don't fade easily with washes." },
  { q: "Can I bring my own fabric?", a: "We prefer using our high-quality tested fabrics, but we can discuss custom requests." },
];

const FabricWork = () => (
  <Layout>
    <ServiceDetailPage
      emoji="👕"
      title="Fabric Work"
      subtitle="Customized printing and branding on fabric materials"
      stats={["Quality Fabric", "Vibrant Prints", "Bulk Supply"]}
      services={fabricServices}
      faqs={faqs}
      whatsappPrefix="Fabric Work"
    />
  </Layout>
);

export default FabricWork;
