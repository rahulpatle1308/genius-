import Layout from "@/components/layout/Layout";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";

const adServices = [
  { name: "Outdoor Advertising", desc: "Strategic billboard and hoarding placements.", features: ["Prime locations", "Design support", "Maintenance"], tech: "Hoarding / Billboard", timeline: "Varies", price: "Custom Quote" },
  { name: "Shop Branding", desc: "Complete front and interior branding for retail outlets.", features: ["ACP boards", "Glass branding", "Acrylic letters"], tech: "Visual Branding", timeline: "5-10 days", price: "Custom Quote" },
  { name: "Event Promotions", desc: "Branding materials for corporate and social events.", features: ["Stalls", "Backdrops", "Collaterals"], tech: "Event Branding", timeline: "3-7 days", price: "Custom Quote" },
  { name: "Political Campaigns", desc: "Complete campaign branding and promotion.", features: ["Banners", "Posters", "Vehicle branding"], tech: "Bulk Campaigning", timeline: "Varies", price: "Custom Quote" },
];

const faqs = [
  { q: "Do you handle hoarding permissions?", a: "We can guide you through the process or handle it through our partner networks." },
  { q: "What is shop branding?", a: "It includes everything from the main board to glass films, interior posters, and LED displays." },
];

const AdvertisingSolutions = () => (
  <Layout>
    <ServiceDetailPage
      emoji="📢"
      title="Advertising Solutions"
      subtitle="End-to-end branding and advertising support"
      stats={["Brand Visibility", "Creative Execution", "Market Reach"]}
      services={adServices}
      faqs={faqs}
      whatsappPrefix="Advertising Solutions"
    />
  </Layout>
);

export default AdvertisingSolutions;
