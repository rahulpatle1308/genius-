import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppWidget = () => (
  <motion.a
    href="https://wa.me/917489741225?text=Hi%20ENGPROOF%2C%20I%27m%20interested%20in%20your%20services."
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
    style={{ background: "hsl(142 70% 45%)" }}
    aria-label="Chat on WhatsApp"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 1, type: "spring" }}
    whileHover={{ boxShadow: "0 8px 25px hsl(142 70% 45% / 0.5)" }}
  >
    <MessageCircle size={24} className="text-white" />
  </motion.a>
);

export default WhatsAppWidget;
