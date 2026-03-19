import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import ServicesPreview from "@/components/home/ServicesPreview";
import ProjectSlider from "@/components/home/ProjectSlider";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ProcessSection from "@/components/home/ProcessSection";
import ContactPreview from "@/components/home/ContactPreview";

const Index = () => (
  <Layout>
    <HeroSection />
    <TrustBar />
    <ServicesPreview />
    <ProjectSlider />
    <WhyChooseUs />
    <ProcessSection />
    <ContactPreview />
  </Layout>
);

export default Index;
