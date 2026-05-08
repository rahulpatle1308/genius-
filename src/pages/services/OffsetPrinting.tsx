import Layout from "@/components/layout/Layout";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";

const offsetServices = [
  {
    name: "Business Cards",
    desc: "Premium quality business cards with various finishes.",
    features: ["Matte/Gloss lamination", "Spot UV", "Velvet finish", "Standard/Custom sizes"],
    tech: "Heidelberg Offset Machines",
    timeline: "2-3 days",
    price: "Starting ₹200",
  },
  {
    name: "Letterheads & Stationery",
    desc: "High-quality corporate stationery for your business.",
    features: ["Standard 90-120 GSM paper", "Bulk printing", "Consistent brand colors"],
    tech: "Offset Printing",
    timeline: "3-5 days",
    price: "Starting ₹1.5/pc",
  },
  {
    name: "Bill Books & Forms",
    desc: "Customized bill books, invoices, and challans.",
    features: ["Carbonless paper (NCR)", "Duplicate/Triplicate", "Serial numbering", "Perforation"],
    tech: "Offset Printing",
    timeline: "5-7 days",
    price: "Starting ₹150",
  },
  {
    name: "Pamphlets & Flyers",
    desc: "Vibrant and sharp marketing materials for distribution.",
    features: ["A4/A5/A6 sizes", "Art paper/Normal paper", "Single/Double sided"],
    tech: "High-Speed Offset",
    timeline: "2-4 days",
    price: "Starting ₹1000 for 1000 pcs",
  },
];

const faqs = [
  { q: "What is the minimum order quantity for offset printing?", a: "Minimum quantities vary by product, usually starting from 500-1000 units for the best pricing." },
  { q: "Can you help with the design?", a: "Yes, our creative team can design your materials before we print them." },
  { q: "Do you deliver across India?", a: "Yes, we ship our printed products nationwide." },
];

const OffsetPrinting = () => (
  <Layout>
    <ServiceDetailPage
      emoji="🖨️"
      title="Offset Printing"
      subtitle="High-quality commercial printing with precision"
      stats={["Premium Finishing", "Precision Printing", "Bulk Capacity"]}
      services={offsetServices}
      faqs={faqs}
      whatsappPrefix="Offset Printing"
    />
  </Layout>
);

export default OffsetPrinting;
