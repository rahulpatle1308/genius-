import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import CreativeDesigning from "./pages/services/CreativeDesigning";
import OffsetPrinting from "./pages/services/OffsetPrinting";
import FlexPrinting from "./pages/services/FlexPrinting";
import FabricWork from "./pages/services/FabricWork";
import AdvertisingSolutions from "./pages/services/AdvertisingSolutions";
import DigitalMarketing from "./pages/services/DigitalMarketing";
import LEDBoardSolutions from "./pages/services/LEDBoardSolutions";
import MobileAppDevelopment from "./pages/services/MobileAppDevelopment";
import SEOServices from "./pages/services/SEOServices";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import Founder from "./pages/Founder";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/creative-designing" element={<CreativeDesigning />} />
          <Route path="/services/offset-printing" element={<OffsetPrinting />} />
          <Route path="/services/flex-printing" element={<FlexPrinting />} />
          <Route path="/services/fabric-work" element={<FabricWork />} />
          <Route path="/services/advertising-solutions" element={<AdvertisingSolutions />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/led-boards" element={<LEDBoardSolutions />} />
          <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
          <Route path="/services/seo-services" element={<SEOServices />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/founder" element={<Founder />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
