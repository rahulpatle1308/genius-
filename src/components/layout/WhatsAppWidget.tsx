import { MessageCircle } from "lucide-react";

const WhatsAppWidget = () => (
  <a
    href="https://wa.me/917489741225?text=Hi%20ENGPROOF%2C%20I%27m%20interested%20in%20your%20services."
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 animate-pulse-glow"
    style={{ background: "hsl(142 70% 45%)" }}
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle size={26} className="text-foreground" />
  </a>
);

export default WhatsAppWidget;
