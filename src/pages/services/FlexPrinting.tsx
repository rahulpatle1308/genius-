import Layout from "@/components/layout/Layout";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";

const flexServices = [
  {
    name: "Flex Banners",
    desc: "Large-format outdoor banners for branding and events.",
    features: ["Normal/Star flex", "Weather resistant", "Vibrant colors", "Metal eyelets"],
    tech: "Eco-Solvent / Solvent Printers",
    timeline: "24-48 hours",
    price: "Starting ₹10/sqft",
  },
  {
    name: "Hoardings & Billboards",
    desc: "Massive outdoor advertising solutions.",
    features: ["High-quality star flex", "Large scale printing", "Durable materials"],
    tech: "Outdoor Solvent Printing",
    timeline: "3-5 days",
    price: "Custom Quote",
  },
  {
    name: "Backlit & Glow Sign Boards",
    desc: "Illuminated branding for night-time visibility.",
    features: ["Backlit flex", "LED illumination", "Glow sign boxes", "Metal frame"],
    tech: "LED & Flex Integration",
    timeline: "5-7 days",
    price: "Custom Quote",
  },
  {
    name: "Vinyl & One-Way Vision",
    desc: "Self-adhesive branding for glass and flat surfaces.",
    features: ["Matte/Gloss vinyl", "Sun-control vision", "Shop front branding", "Easy application"],
    tech: "Eco-Solvent Printing",
    timeline: "1-2 days",
    price: "Starting ₹35/sqft",
  },
];

const faqs = [
  { q: "Is flex printing waterproof?", a: "Yes, flex printing is highly durable and weather-resistant, making it perfect for outdoor use." },
  { q: "How long does the color last?", a: "Depending on sun exposure, colors typically remain vibrant for 1-2 years outdoors." },
  { q: "Do you provide installation services?", a: "Yes, we can handle the installation of banners and boards at your site." },
];

const FlexPrinting = () => (
  <Layout>
    <ServiceDetailPage
      emoji="🚩"
      title="Flex Printing"
      subtitle="Large-format printing solutions for outdoor branding"
      stats={["Weather Resistant", "High Visibility", "Fast Turnaround"]}
      services={flexServices}
      faqs={faqs}
      whatsappPrefix="Flex Printing"
    />
  </Layout>
);

export default FlexPrinting;
