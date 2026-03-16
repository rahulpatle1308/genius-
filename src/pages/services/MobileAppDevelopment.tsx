import Layout from "@/components/layout/Layout";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";

const services = [
  { name: "Android App Development", desc: "Native Android apps built with Kotlin/Java for the Play Store.", features: ["Native performance", "Play Store deployment", "Push notifications", "Offline support"], tech: "Kotlin, Java, Android Studio", timeline: "30-45 days", price: "Starting ₹50,000" },
  { name: "iOS App Development", desc: "Native iOS apps built with Swift for the App Store.", features: ["Native UI/UX", "App Store deployment", "Apple Pay integration", "iCloud sync"], tech: "Swift, Xcode", timeline: "30-45 days", price: "Starting ₹60,000" },
  { name: "Business App", desc: "Custom business apps for service booking and management.", features: ["Service booking", "User management", "Analytics dashboard", "Role-based access"], tech: "React Native, Flutter, Firebase", timeline: "40-60 days", price: "Custom Quote" },
  { name: "E-commerce App", desc: "Full-featured shopping apps with payment integration.", features: ["Product catalog", "Cart & checkout", "Payment gateway", "Order tracking"], tech: "React Native, Flutter, Stripe", timeline: "45-60 days", price: "Custom Quote" },
];

const faqs = [
  { q: "Do you build cross-platform apps?", a: "Yes, we use React Native and Flutter for cross-platform development, reducing cost and time." },
  { q: "Will my app be on both Play Store and App Store?", a: "Yes, we can deploy to both stores. Cross-platform apps run on both with a single codebase." },
  { q: "Do you provide app maintenance?", a: "Yes, we offer ongoing maintenance, updates, and 24/7 support packages." },
];

const MobileAppDevelopment = () => (
  <Layout>
    <ServiceDetailPage
      emoji="📱"
      title="Mobile App Development"
      subtitle="Native and cross-platform apps with enterprise-grade backend"
      stats={["iOS & Android", "Real-time Sync", "Secure Backend"]}
      services={services}
      faqs={faqs}
      whatsappPrefix="Mobile App Development"
    />
  </Layout>
);

export default MobileAppDevelopment;
