import Layout from "@/components/layout/Layout";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";

const services = [
  { name: "Corporate Events", desc: "End-to-end management for corporate gatherings.", features: ["Conferences & seminars", "Product launches", "Annual meetings", "Venue coordination", "Logistics management"], timeline: "2-4 weeks", price: "Custom Quote" },
  { name: "Registration Systems", desc: "Digital registration and attendee management.", features: ["Online registration portal", "QR code check-in", "Real-time tracking", "Digital certificates", "Payment collection"], timeline: "1-2 weeks", price: "Starting ₹15,000" },
  { name: "Technical Support", desc: "Complete technical infrastructure for events.", features: ["Sound systems", "Lighting setup", "LED screens", "Live streaming", "Recording services", "On-site technicians"], timeline: "1-3 days setup", price: "Starting ₹10,000" },
];

const faqs = [
  { q: "How far in advance should I book?", a: "We recommend at least 2-4 weeks for corporate events to ensure proper planning and coordination." },
  { q: "Do you handle venue booking?", a: "Yes, we can assist with venue selection and booking as part of our full event management package." },
  { q: "What about virtual events?", a: "We provide complete virtual and hybrid event solutions including live streaming and recording." },
];

const EventManagement = () => (
  <Layout>
    <ServiceDetailPage
      emoji="🎤"
      title="Event Management"
      subtitle="Corporate events, registration systems, and technical support"
      stats={["Full Planning", "QR Check-in", "Live Streaming"]}
      services={services}
      faqs={faqs}
      whatsappPrefix="Event Management"
    />
  </Layout>
);

export default EventManagement;
