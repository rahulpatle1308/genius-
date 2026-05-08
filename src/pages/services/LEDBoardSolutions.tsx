import Layout from "@/components/layout/Layout";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";

const ledServices = [
  { name: "LED Sign Boards", desc: "Premium illuminated boards for shop fronts.", features: ["Acrylic letters", "Samsung LED", "Weatherproof"], tech: "Acrylic / LED", timeline: "7-10 days", price: "Custom Quote" },
  { name: "ACP LED Boards", desc: "Durable and modern ACP sheet boards with LEDs.", features: ["High finish", "Long life", "Vibrant illumination"], tech: "ACP / LED", timeline: "10-15 days", price: "Custom Quote" },
  { name: "Acrylic LED Boards", desc: "Crystal clear acrylic boards with smart lighting.", features: ["3D letters", "Shadow effects", "Premium look"], tech: "Acrylic CNC", timeline: "7-10 days", price: "Custom Quote" },
  { name: "Glow Sign Boards", desc: "Cost-effective backlit boards for small businesses.", features: ["Backlit flex", "MS frame", "Tube/LED light"], tech: "Flex / Light Box", timeline: "3-5 days", price: "Starting ₹2,000" },
];

const faqs = [
  { q: "Do you provide a warranty?", a: "Yes, we provide a 1-year warranty on LEDs and adapters." },
  { q: "Can the board be used outdoors?", a: "Yes, our boards are designed to be weatherproof and durable." },
];

const LEDBoardSolutions = () => (
  <Layout>
    <ServiceDetailPage
      emoji="💡"
      title="LED Board Solutions"
      subtitle="Modern illuminated branding for strong visibility"
      stats={["Samsung LED", "Weatherproof", "1 Year Warranty"]}
      services={ledServices}
      faqs={faqs}
      whatsappPrefix="LED Board Solutions"
    />
  </Layout>
);

export default LEDBoardSolutions;
