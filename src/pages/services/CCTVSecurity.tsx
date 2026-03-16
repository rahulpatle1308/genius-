import Layout from "@/components/layout/Layout";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";

const services = [
  { name: "Home CCTV Setup", desc: "Protect your home with professional surveillance systems.", features: ["Indoor/outdoor cameras", "Night vision", "Mobile remote access", "Installation included"], timeline: "1-2 days", price: "Starting ₹8,000" },
  { name: "Office Security System", desc: "Comprehensive security for your workplace.", features: ["HD cameras", "DVR/NVR recording", "Access control", "Monitoring setup"], timeline: "2-3 days", price: "Starting ₹15,000" },
  { name: "Wireless CCTV", desc: "Wire-free security with cloud capabilities.", features: ["WiFi cameras", "Cloud backup options", "Easy installation", "Mobile alerts"], timeline: "1-2 days", price: "Starting ₹12,000" },
  { name: "Security Maintenance", desc: "Keep your systems running at peak performance.", features: ["Regular inspection", "System upgrades", "Emergency repairs", "24/7 support"], timeline: "Ongoing", price: "Starting ₹2,000/month" },
];

const faqs = [
  { q: "How long does CCTV installation take?", a: "Typically 1-3 days depending on the number of cameras and complexity of the setup." },
  { q: "Can I view cameras from my phone?", a: "Yes, all our systems come with mobile app access for remote viewing anywhere." },
  { q: "Do you provide warranty?", a: "Yes, all equipment comes with manufacturer warranty and our installation guarantee." },
];

const CCTVSecurity = () => (
  <Layout>
    <ServiceDetailPage
      emoji="🔒"
      title="CCTV & Security"
      subtitle="Protect your home and business with modern surveillance"
      stats={["24/7 Monitoring", "Remote Access", "Motion Detection"]}
      services={services}
      faqs={faqs}
      whatsappPrefix="CCTV & Security"
    />
  </Layout>
);

export default CCTVSecurity;
