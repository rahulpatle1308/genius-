import { Phone } from "lucide-react";

const TopBar = () => (
  <div className="top-bar">
    <span>Enterprise Technology Solutions Since 2025</span>
    <span className="hidden sm:inline">|</span>
    <a href="tel:+917489741225" className="hidden sm:inline-flex items-center gap-1.5 hover:opacity-80 transition-opacity">
      <Phone size={11} />
      24/7 Emergency Support: +91 74897 41225
    </a>
  </div>
);

export default TopBar;
