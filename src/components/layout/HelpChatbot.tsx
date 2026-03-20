import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Send, X, Bot, User } from "lucide-react";
import logo from "@/assets/logo.png";

interface Message {
  id: number;
  text: string;
  sender: "bot" | "user";
  options?: ChatOption[];
}

interface ChatOption {
  label: string;
  value: string;
  action?: "whatsapp" | "answer";
  answer?: string;
  whatsappMsg?: string;
}

const faqData: ChatOption[] = [
  {
    label: "💰 Pricing Info",
    value: "pricing",
    action: "answer",
    answer: "Our pricing:\n\n📘 Website: Starting ₹15,000\n📱 Mobile App: Starting ₹50,000\n🔒 CCTV: Starting ₹8,000\n🆔 ID Cards: Starting ₹30/card\n🎤 Events: Custom Quote\n\nWant a detailed quote? I can connect you with our team on WhatsApp!",
  },
  {
    label: "🕐 Business Hours",
    value: "hours",
    action: "answer",
    answer: "We're available:\n\n📅 Mon-Sat: 8:00 AM – 8:00 PM\n🚨 Emergency Support: 24/7\n📍 Location: Bhopal, MP, India\n📞 Call: +91 74897 41225",
  },
  {
    label: "🛠️ Our Services",
    value: "services",
    action: "answer",
    answer: "We provide 5 core services:\n\n📘 Website Development\n📱 Mobile App Development\n🔒 CCTV & Security Systems\n🆔 Digital ID Cards\n🎤 Event Management\n\nWould you like details about any specific service?",
  },
  {
    label: "📞 Talk to Team",
    value: "contact",
    action: "whatsapp",
    whatsappMsg: "Hi ENGPROOF, I need help. Can someone assist me?",
  },
];

const serviceDetails: Record<string, ChatOption[]> = {
  services: [
    { label: "📘 Website Development", value: "web-detail", action: "answer", answer: "Website Development Services:\n\n• Static Website – ₹15,000+\n• Dynamic Website – ₹35,000+\n• E-commerce – ₹60,000+\n• Corporate – Custom Quote\n• Custom Web App – Custom Quote\n\n⏱️ Timeline: 5-60 days\n🔧 Tech: React, PHP, Node.js" },
    { label: "📱 Mobile App", value: "app-detail", action: "answer", answer: "Mobile App Development:\n\n• Android App – ₹50,000+\n• iOS App – ₹60,000+\n• Business App – Custom Quote\n• E-commerce App – Custom Quote\n\n⏱️ Timeline: 30-90 days\n🔧 Tech: Kotlin, Swift, Flutter" },
    { label: "🔒 CCTV Security", value: "cctv-detail", action: "answer", answer: "CCTV & Security Systems:\n\n• Home CCTV – ₹8,000+\n• Office Security – ₹15,000+\n• Wireless CCTV – ₹12,000+\n• Maintenance – ₹2,000/mo\n\n✅ Installation included\n📱 Remote mobile access" },
    { label: "🆔 ID Cards", value: "id-detail", action: "answer", answer: "Digital ID Card Services:\n\n• Corporate ID – ₹50/card+\n• School ID – ₹30/card+\n• Smart QR ID – ₹80/card+\n• PVC Printed – ₹100/card+\n\n⏱️ Turnaround: 2-3 days\n📦 Bulk discounts available" },
    { label: "🎤 Event Management", value: "event-detail", action: "answer", answer: "Event Management:\n\n• Corporate Events – Custom\n• Registration Systems – ₹15,000+\n• Technical Support – ₹10,000+\n\n✅ Sound, Lighting, LED, Streaming\n📋 QR check-in & certificates" },
  ],
};

const HelpChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "👋 Hi ENGPROOF! Welcome. How can I help you today?",
      sender: "bot",
      options: faqData,
    },
  ]);
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const idRef = useRef(2);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const addMessage = (text: string, sender: "bot" | "user", options?: ChatOption[]) => {
    const id = idRef.current++;
    setMessages((prev) => [...prev, { id, text, sender, options }]);
  };

  const handleOptionClick = (option: ChatOption) => {
    addMessage(option.label, "user");

    if (option.action === "whatsapp") {
      const msg = option.whatsappMsg || "Hi ENGPROOF, I need help.";
      addMessage("Opening WhatsApp for you... 💬\n\nThank you for choosing ENGPROOF! 🙏", "bot");
      setTimeout(() => {
        window.open(`https://wa.me/917489741225?text=${encodeURIComponent(msg)}`, "_blank");
      }, 500);
    } else if (option.action === "answer") {
      const followUp: ChatOption[] = serviceDetails[option.value] || [
        { label: "📞 Talk to Team on WhatsApp", value: "wa", action: "whatsapp", whatsappMsg: `Hi ENGPROOF, I have a question about ${option.label}.` },
        { label: "🔙 Main Menu", value: "menu", action: "answer", answer: "Sure! What else can I help you with?" },
      ];

      const finalOptions = serviceDetails[option.value]
        ? [
            ...serviceDetails[option.value],
            { label: "📞 Get Quote on WhatsApp", value: "wa-quote", action: "whatsapp" as const, whatsappMsg: `Hi ENGPROOF, I'd like a quote for your services.` },
            { label: "🔙 Main Menu", value: "menu", action: "answer" as const, answer: "Sure! What else can I help you with?" },
          ]
        : [
            { label: "📞 Talk to Team on WhatsApp", value: "wa", action: "whatsapp" as const, whatsappMsg: `Hi ENGPROOF, I have a question about ${option.label}.` },
            { label: "🔙 Main Menu", value: "menu", action: "answer" as const, answer: "Sure! What else can I help you with?" },
          ];

      setTimeout(() => {
        if (option.value === "menu") {
          addMessage(option.answer || "", "bot", faqData);
        } else {
          addMessage(option.answer || "", "bot", finalOptions);
        }
      }, 400);
    }
  };

  const handleSend = () => {
    if (!inputText.trim()) return;
    const text = inputText.trim();
    setInputText("");
    addMessage(text, "user");

    // Simple keyword matching
    const lower = text.toLowerCase();
    let matched = false;

    if (lower.includes("price") || lower.includes("cost") || lower.includes("pricing") || lower.includes("rate")) {
      setTimeout(() => handleOptionClick(faqData[0]), 300);
      matched = true;
    } else if (lower.includes("time") || lower.includes("hour") || lower.includes("open") || lower.includes("available")) {
      setTimeout(() => handleOptionClick(faqData[1]), 300);
      matched = true;
    } else if (lower.includes("service") || lower.includes("what do you")) {
      setTimeout(() => handleOptionClick(faqData[2]), 300);
      matched = true;
    } else if (lower.includes("website") || lower.includes("web")) {
      setTimeout(() => handleOptionClick(serviceDetails.services[0]), 300);
      matched = true;
    } else if (lower.includes("app") || lower.includes("mobile")) {
      setTimeout(() => handleOptionClick(serviceDetails.services[1]), 300);
      matched = true;
    } else if (lower.includes("cctv") || lower.includes("camera") || lower.includes("security")) {
      setTimeout(() => handleOptionClick(serviceDetails.services[2]), 300);
      matched = true;
    } else if (lower.includes("id") || lower.includes("card")) {
      setTimeout(() => handleOptionClick(serviceDetails.services[3]), 300);
      matched = true;
    } else if (lower.includes("event")) {
      setTimeout(() => handleOptionClick(serviceDetails.services[4]), 300);
      matched = true;
    }

    if (!matched) {
      setTimeout(() => {
        addMessage(
          "I'm not sure about that. Let me connect you with our team who can help better! 🙂\n\nThank you for reaching out! 🙏",
          "bot",
          [
            { label: "📞 Chat with Team on WhatsApp", value: "wa-help", action: "whatsapp", whatsappMsg: `Hi ENGPROOF, I need help with: ${text}` },
            { label: "🔙 Main Menu", value: "menu", action: "answer", answer: "Sure! What else can I help you with?" },
          ]
        );
      }, 500);
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            onClick={() => setIsOpen(true)}
            className="fixed bottom-[76px] right-5 sm:bottom-[88px] sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary flex items-center justify-center shadow-lg text-primary-foreground"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring" }}
            aria-label="Open help chat"
          >
            <Bot size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-[76px] right-3 sm:bottom-[88px] sm:right-6 z-50 w-[340px] sm:w-[380px] max-h-[500px] rounded-2xl shadow-2xl border border-border bg-background flex flex-col overflow-hidden"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.25 }}
          >
            {/* Header */}
            <div className="teal-gradient px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img src={logo} alt="ENGPROOF" className="h-8 w-8 rounded-full bg-white/20 p-0.5" />
                <div>
                  <p className="text-white text-sm font-bold leading-none">ENGPROOF Help</p>
                  <p className="text-white/70 text-[10px]">Usually replies instantly</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[250px] max-h-[340px]">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div className="max-w-[85%]">
                    <div className={`flex items-start gap-2 ${msg.sender === "user" ? "flex-row-reverse" : ""}`}>
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                        msg.sender === "bot" ? "bg-primary/10" : "bg-secondary"
                      }`}>
                        {msg.sender === "bot" ? <Bot size={14} className="text-primary" /> : <User size={14} className="text-muted-foreground" />}
                      </div>
                      <div className={`px-3 py-2 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                        msg.sender === "user"
                          ? "bg-primary text-primary-foreground rounded-tr-sm"
                          : "bg-secondary text-foreground rounded-tl-sm"
                      }`}>
                        {msg.text}
                      </div>
                    </div>
                    {/* Options */}
                    {msg.options && msg.sender === "bot" && (
                      <div className="flex flex-wrap gap-1.5 mt-2 ml-8">
                        {msg.options.map((opt) => (
                          <button
                            key={opt.value}
                            onClick={() => handleOptionClick(opt)}
                            className="text-xs px-3 py-1.5 rounded-full border border-primary/30 text-primary bg-primary/5 hover:bg-primary/15 transition-colors font-medium"
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-border p-3">
              <form
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Type your question..."
                  className="flex-1 px-3 py-2 rounded-xl bg-secondary text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50"
                />
                <button
                  type="submit"
                  className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  <Send size={16} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HelpChatbot;
