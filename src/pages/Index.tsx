import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ProcessSection from "@/components/home/ProcessSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ContactPreview from "@/components/home/ContactPreview";

const Index = () => (
  <Layout>
    <HeroSection />
    <TrustBar />
    <ServicesPreview />
    <WhyChooseUs />
    <ProcessSection />
    <TestimonialsSection />
    <ContactPreview />
  </Layout>
);

export default Index;
