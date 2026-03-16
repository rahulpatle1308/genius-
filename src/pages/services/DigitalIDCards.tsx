import Layout from "@/components/layout/Layout";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";

const services = [
  { name: "Corporate ID Cards", desc: "Professional identification for employees.", features: ["Professional design", "Employee details", "Company logo", "Durable material"], timeline: "2-3 days", price: "Starting ₹50/card" },
  { name: "School ID Cards", desc: "Student and staff identification systems.", features: ["Student/staff IDs", "Batch printing", "Library card option", "Security features"], timeline: "2-3 days", price: "Starting ₹30/card" },
  { name: "Smart QR ID Cards", desc: "Digital verification with QR code integration.", features: ["QR code integration", "Digital verification", "Scanner compatible", "Secure encoding"], timeline: "3-4 days", price: "Starting ₹80/card" },
  { name: "PVC Printed ID Cards", desc: "Premium quality PVC identification cards.", features: ["High-quality PVC", "Full color printing", "Magnetic stripe option", "RFID available"], timeline: "3-5 days", price: "Starting ₹100/card" },
];

const faqs = [
  { q: "What's the minimum order quantity?", a: "We accept orders from as low as 10 cards, with bulk discounts available for 100+." },
  { q: "Can I customize the design?", a: "Absolutely. We offer custom design services or can work with your existing brand guidelines." },
  { q: "Do you provide lanyards?", a: "Yes, we offer a range of lanyards and card holders to complement your ID cards." },
];

const DigitalIDCards = () => (
  <Layout>
    <ServiceDetailPage
      emoji="🆔"
      title="Digital ID Cards"
      subtitle="Professional identification for employees and students"
      stats={["Fast Turnaround", "Bulk Discounts", "Custom Design"]}
      services={services}
      faqs={faqs}
      whatsappPrefix="Digital ID Cards"
    />
  </Layout>
);

export default DigitalIDCards;
